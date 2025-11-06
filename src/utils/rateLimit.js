/**
 * Simple in-memory rate limiting
 * For production, consider using Redis or a dedicated rate limiting service
 */

// Store for rate limit data (in-memory, resets on server restart)
const rateLimitStore = new Map();

/**
 * Cleans up old entries from rate limit store
 */
const cleanupRateLimitStore = () => {
  const now = Date.now();
  for (const [key, data] of rateLimitStore.entries()) {
    if (now > data.expiresAt) {
      rateLimitStore.delete(key);
    }
  }
};

/**
 * Checks if a request should be rate limited
 * @param {string} identifier - Unique identifier (IP address, email, etc.)
 * @param {number} maxRequests - Maximum number of requests allowed
 * @param {number} windowMs - Time window in milliseconds
 * @returns {Object} - { allowed: boolean, remaining: number, resetAt: number }
 */
export const checkRateLimit = (identifier, maxRequests = 5, windowMs = 15 * 60 * 1000) => {
  // Cleanup old entries periodically
  if (Math.random() < 0.1) { // 10% chance to cleanup
    cleanupRateLimitStore();
  }
  
  const now = Date.now();
  const key = identifier;
  const record = rateLimitStore.get(key);
  
  if (!record || now > record.expiresAt) {
    // Create new record
    rateLimitStore.set(key, {
      count: 1,
      expiresAt: now + windowMs
    });
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetAt: now + windowMs
    };
  }
  
  if (record.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: record.expiresAt
    };
  }
  
  // Increment count
  record.count++;
  rateLimitStore.set(key, record);
  
  return {
    allowed: true,
    remaining: maxRequests - record.count,
    resetAt: record.expiresAt
  };
};

/**
 * Gets client IP address from request
 * @param {Request} request - Next.js request object
 * @returns {string} - IP address
 */
export const getClientIP = (request) => {
  // Try to get IP from various headers (for proxies/load balancers)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  
  // Fallback (won't work in production with proxies)
  return 'unknown';
};

