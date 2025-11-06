import { NextResponse } from 'next/server';
import { sendQuoteFormEmail } from '../../../utils/email';
import { validateQuoteForm } from '../../../utils/validation';

/**
 * POST /api/quote
 * Handles quote form submissions with validation and email sending
 */
export async function POST(request) {
  try {
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
    const validation = validateQuoteForm(body);
    
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
      emailResult = await sendQuoteFormEmail(validation.sanitizedData);
    } catch (emailError) {
      console.error('Email sending error:', emailError.message);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send quote request. Please try again later.' 
        },
        { status: 500 }
      );
    }
    
    if (!emailResult.success) {
      console.error('Failed to send quote form email');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send quote request. Please try again later or contact us directly.' 
        },
        { status: 500 }
      );
    }
    
    // Success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request received successfully. We will contact you within 24 hours.' 
      },
      { 
        status: 200
      }
    );
    
  } catch (error) {
    console.error('Error processing quote request:', error.message);
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

