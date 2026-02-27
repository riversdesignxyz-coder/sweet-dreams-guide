# PayFast Integration Guide

## Overview

This guide explains how to set up PayFast payment processing for the Sweet Dreams website.

## Security Important ⚠️

**NEVER commit `.env.local` or environment files with secrets to version control!**

The backend API handles all sensitive PayFast credentials securely.

## Step 1: Get Your PayFast Credentials

### Create a PayFast Account

1. Visit https://www.payfast.co.za
2. Click "Create Account" > "Merchant"
3. Complete registration
4. Verify your email

### Get Your Credentials (Live)

1. Log in to your PayFast account
2. Go to **Settings > Integration**
3. Copy these values (you'll need them):
   - **Merchant ID**
   - **Merchant Key**
   - **Passphrase** (create one if not already set)

### Get Sandbox Credentials (Testing)

For testing before going live:
- **Merchant ID**: `10000100`
- **Merchant Key**: `46f0cd694581a`
- **Passphrase**: (leave blank for sandbox)
- **Endpoint**: `https://sandbox.payfast.co.za/eng/process`

Test card: `4011 1111 1111 1111`

## Step 2: Deploy to Vercel

### Install Vercel CLI

```bash
npm install -g vercel
```

### Deploy Your Project

```bash
vercel
```

Follow the prompts to link your GitHub repository.

### Add Environment Variables to Vercel

In your Vercel project settings:

1. Go to **Settings > Environment Variables**
2. Add these variables:

```
PAYFAST_MERCHANT_ID = your_merchant_id
PAYFAST_MERCHANT_KEY = your_merchant_key
PAYFAST_PASSPHRASE = your_passphrase
PAYFAST_SANDBOX = false (or true for testing)
API_URL = https://yourdomain.vercel.app
```

**Example for Sandbox Testing:**

```
PAYFAST_MERCHANT_ID = 10000100
PAYFAST_MERCHANT_KEY = 46f0cd694581a
PAYFAST_PASSPHRASE = 
PAYFAST_SANDBOX = true
API_URL = https://yourdomain.vercel.app
```

## Step 3: Update Frontend Code

### Update Purchase.tsx

Replace the hardcoded PayFast form with API call:

```typescript
// In src/pages/Purchase.tsx

async function handleCheckout(e: React.FormEvent) {
  e.preventDefault();
  
  try {
    // Call backend to generate secure form data
    const response = await fetch('/api/payfast-process?action=form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 99.00,
        email: email,
        itemId: 'sweet-dreams-guide',
      }),
    });

    const { formData, endpoint } = await response.json();
    
    // Submit to PayFast
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = endpoint;
    
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
  } catch (error) {
    console.error('Checkout error:', error);
  }
}
```

## Step 4: Handle Payment Confirmation (ITN Webhook)

When a payment is made, PayFast sends an ITN (Instant Transaction Notification) to your backend.

The endpoint `/api/payfast-process?action=itn` handles this.

### In Your Backend (`api/payfast-process.ts`), Add:

```typescript
// Send email with PDF download link
if (payment_status === 'COMPLETE') {
  // TODO: Use your email service (SendGrid, Mailgun, etc.)
  await sendEmail({
    to: email_address,
    subject: 'Your Sweet Dreams Guide - Download Here!',
    body: `
      Thank you for purchasing Sweet Dreams!
      
      Download your PDF here: https://yourdomain.com/downloads/sweet-dreams.pdf
      
      Your transaction ID: ${m_payment_id}
      Amount: R${amount_gross}
    `,
  });
  
  // TODO: Store transaction in database
  await database.transactions.create({
    paymentId: m_payment_id,
    email: email_address,
    amount: amount_gross,
    status: payment_status,
    timestamp: new Date(),
  });
}
```

## Step 5: Test Payment Flow

### With Sandbox (Recommended First)

1. Set `PAYFAST_SANDBOX = true` in environment variables
2. Deploy to Vercel or run locally
3. Click "Get Your Copy Now"
4. Use test card: `4011 1111 1111 1111`
5. Any future expiry date, any CVV
6. Click through to PayFast
7. Complete test payment

### With Live (After Testing)

1. Set `PAYFAST_SANDBOX = false`
2. Deploy update to Vercel
3. Payment flow automatically uses live PayFast

## Troubleshooting

### "Signature Mismatch" Error

**Cause**: PassPhrase is incorrect or mismatched

**Solution**:
1. Check PayFast dashboard for exact passphrase
2. Ensure it matches in environment variables (include spaces/special chars exactly)
3. For sandbox, typically leave passphrase blank

### Payment Redirects to Wrong URL

**Cause**: `API_URL` environment variable incorrect

**Solution**:
- Set `API_URL` to your actual domain (e.g., `https://sweet-dreams.vercel.app`)

### ITN Not Being Received

**Cause**: PayFast can't reach your notification URL

**Solution**:
1. Ensure `notify_url` is publicly accessible
2. Check Vercel logs (`vercel logs`) for errors
3. Test endpoint manually: `curl https://yourdomain.com/api/payfast-process?action=itn`

### Email Not Sending After Payment

**Cause**: Email service not configured

**Solution**:
1. Choose email provider (SendGrid, Mailgun, AWS SES)
2. Add credentials to environment variables
3. Implement email sending in ITN handler

## Recommended Email Services

### SendGrid (Free tier available)

```bash
npm install @sendgrid/mail
```

```typescript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: email_address,
  from: 'hello@sweetdreams.co.za',
  subject: 'Your Sweet Dreams Guide',
  html: emailTemplate,
});
```

### Mailgun

```bash
npm install mailgun.js
```

```typescript
import mailgun from 'mailgun.js';
import FormData from 'form-data';

const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

await mg.messages.create('mail.sweetdreams.co.za', {
  from: 'hello@sweetdreams.co.za',
  to: email_address,
  subject: 'Your Sweet Dreams Guide',
  html: emailTemplate,
});
```

## Production Checklist

- [ ] PayFast account set up and verified
- [ ] Live merchant ID and key obtained
- [ ] Passphrase set in PayFast dashboard
- [ ] Environment variables configured in Vercel
- [ ] Backend API deployed to Vercel
- [ ] Email service configured and tested
- [ ] PDF delivery system implemented
- [ ] Test payment completed successfully
- [ ] ITN webhook verified working
- [ ] Error handling implemented
- [ ] Logging set up for debugging
- [ ] SSL certificate configured (automatic with Vercel)

## Live Deployment Summary

```bash
# 1. Update credentials in Vercel dashboard
# 2. Set PAYFAST_SANDBOX = false
# 3. Deploy latest code
# 4. Test with real PayFast account
# 5. Monitor logs for errors
# 6. Send test payment to verify flow
```

## Support & Resources

- **PayFast Docs**: https://www.payfast.co.za/documentation
- **PayFast Support**: support@payfast.co.za
- **Vercel Docs**: https://vercel.com/docs
- **SendGrid Guide**: https://docs.sendgrid.com

---

**Security Tips**:
- Never share your merchant key publicly
- Always validate ITN signatures
- Use HTTPS only
- Implement rate limiting on payment endpoints
- Log all transactions for audit trail
- Use environment variables for all secrets
