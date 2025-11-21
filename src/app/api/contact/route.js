import { NextResponse } from 'next/server';
import { sendContactFormEmail } from '../../../utils/email';
import { validateContactForm } from '../../../utils/validation';
import { checkRateLimit, getClientIP } from '../../../utils/rateLimit';

/**
 * POST /api/contact
 * Handles contact form submissions with validation and email sending
 */
export async function POST(request) {
  try {
    // Rate limiting: 5 requests per 15 minutes per IP
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP, 5, 15 * 60 * 1000);
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many requests. Please try again later.' 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimit.resetAt - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimit.resetAt.toString()
          }
        }
      );
    }
    
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { success: false, message: 'Invalid request format' },
        { status: 400 }
      );
    }
    
    // Validate and sanitize form data
    const validation = validateContactForm(body);
    
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          message: validation.errors[0] || 'Please check your input and try again.',
          errors: validation.errors
        },
        { status: 400 }
      );
    }
    
    // Send email with sanitized data
    let emailResult;
    try {
      emailResult = await sendContactFormEmail(validation.sanitizedData);
    } catch (emailError) {
      console.error('Email sending error:', emailError.message);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send message. Please try again later.' 
        },
        { status: 500 }
      );
    }
    
    if (!emailResult.success) {
      console.error('Failed to send contact form email');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send message. Please try again later or contact us directly.' 
        },
        { status: 500 }
      );
    }
    
    // Success response with rate limit headers
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully. We will get back to you soon.' 
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetAt.toString()
        }
      }
    );
    
  } catch (error) {
    console.error('Error processing contact form:', error.message);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Optional: Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}

