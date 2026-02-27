/**
 * Vercel Serverless Function for PayFast Payment Processing
 * Deploy to: /api/payfast-process.ts
 * This handles secure payment form generation and ITN webhooks
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

// Validate environment variables
function validateEnv(res: VercelResponse): boolean {
  const required = ['PAYFAST_MERCHANT_ID', 'PAYFAST_MERCHANT_KEY', 'PAYFAST_PASSPHRASE'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    res.status(500).json({
      error: 'Missing environment variables',
      missing,
    });
    return false;
  }
  return true;
}

// Generate PayFast signature
function generateSignature(
  data: Record<string, string | number>,
  passPhrase: string
): string {
  let queryString = '';
  
  Object.keys(data)
    .sort()
    .forEach((key) => {
      if (data[key] !== '') {
        queryString += `${key}=${encodeURIComponent(String(data[key]))}&`;
      }
    });

  queryString = queryString.slice(0, -1);
  
  if (passPhrase) {
    queryString += `&passphrase=${encodeURIComponent(passPhrase)}`;
  }

  return crypto.createHash('md5').update(queryString).digest('hex');
}

// Handle POST request for payment form generation
async function handlePaymentForm(req: VercelRequest, res: VercelResponse) {
  if (!validateEnv(res)) {
    return;
  }

  try {
    const { amount, email, itemId } = req.body;

    if (!amount || !email) {
      return res.status(400).json({
        error: 'Missing required fields: amount, email',
      });
    }

    const apiUrl = process.env.API_URL || 'https://yourdomain.com';
    const sandbox = process.env.PAYFAST_SANDBOX === 'true';

    const formData: Record<string, string | number> = {
      merchant_id: process.env.PAYFAST_MERCHANT_ID!,
      merchant_key: process.env.PAYFAST_MERCHANT_KEY!,
      return_url: `${apiUrl}/thank-you`,
      cancel_url: `${apiUrl}/purchase`,
      notify_url: `${apiUrl}/api/payfast-itn`,
      amount: parseFloat(String(amount)).toFixed(2),
      item_name: 'Sweet Dreams: Baby Sleep Guide (PDF)',
      item_description: '40-page evidence-based baby sleep guide, 0-24 months',
      email_address: email,
      m_item_id: itemId || 'sweet-dreams-guide',
      custom_int1: Math.floor(Date.now() / 1000),
    };

    const signature = generateSignature(formData, process.env.PAYFAST_PASSPHRASE!);
    formData.signature = signature;

    const endpoint = sandbox
      ? 'https://sandbox.payfast.co.za/eng/process'
      : 'https://www.payfast.co.za/eng/process';

    // Return the form data and endpoint so frontend can submit
    res.status(200).json({
      formData,
      endpoint,
      sandbox,
    });
  } catch (error) {
    console.error('Payment form generation error:', error);
    res.status(500).json({
      error: 'Failed to generate payment form',
    });
  }
}

// Handle ITN webhook from PayFast
async function handleITN(req: VercelRequest, res: VercelResponse) {
  if (!validateEnv(res)) {
    return;
  }

  try {
    const data = req.body;

    // Validate signature
    const { signature, ...dataWithoutSignature } = data;
    const expectedSignature = generateSignature(
      dataWithoutSignature,
      process.env.PAYFAST_PASSPHRASE!
    );

    if (signature !== expectedSignature) {
      console.error('Invalid PayFast signature');
      return res.status(400).json({ error: 'Invalid signature' });
    }

    const { m_payment_id, payment_status, email_address, amount_gross } = data;

    // TODO: Implement your logic here
    // Examples:
    // 1. Store transaction in database
    // 2. Send email with PDF download link
    // 3. Update user account with download access
    // 4. Log transaction for accounting

    console.log('ITN Received:', {
      paymentId: m_payment_id,
      status: payment_status,
      email: email_address,
      amount: amount_gross,
    });

    // For now, log success
    if (payment_status === 'COMPLETE') {
      // TODO: Send email to email_address with PDF link
      console.log(`Payment complete for ${email_address}, amount: ${amount_gross}`);
    }

    // PayFast expects a 200 OK response
    res.status(200).send('OK');
  } catch (error) {
    console.error('ITN processing error:', error);
    res.status(500).json({
      error: 'Failed to process ITN',
    });
  }
}

// Main handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Route based on query parameter
  const action = req.query.action || 'form';

  if (action === 'form') {
    return handlePaymentForm(req, res);
  } else if (action === 'itn') {
    return handleITN(req, res);
  } else {
    return res.status(400).json({
      error: 'Invalid action. Use ?action=form or ?action=itn',
    });
  }
}
