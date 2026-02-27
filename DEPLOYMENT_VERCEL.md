# Deployment Guide - Vercel

This guide walks you through deploying the Sweet Dreams website to Vercel with PayFast integration.

## Prerequisites

- GitHub account (to link your repository)
- Vercel account (free at vercel.com)
- PayFast merchant account (both sandbox & live)

## Step 1: Prepare for Deployment

### 1.1 Create `.env.example` (No Secrets!)

Create a file showing what environment variables are needed:

```bash
# .env.example (commit this to GitHub)
PAYFAST_MERCHANT_ID=your_merchant_id_here
PAYFAST_MERCHANT_KEY=your_merchant_key_here
PAYFAST_PASSPHRASE=your_passphrase_here
PAYFAST_SANDBOX=true
API_URL=https://yourdomain.vercel.app
SENDGRID_API_KEY=optional_sendgrid_key
```

**Never commit `.env.local` or `.env` files!**

### 1.2 Update `package.json` for Production

Ensure your build command is correct:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx"
  }
}
```

### 1.3 Commit Your Code to GitHub

```bash
git add .
git commit -m "Prepare for deployment to Vercel"
git push origin main
```

## Step 2: Deploy to Vercel

### 2.1 Connect Your Repository

1. Go to https://vercel.com
2. Click "New Project"
3. Click "Import Git Repository"
4. Select your GitHub repository (e.g., `username/sweet-dreams`)
5. Click "Import"

### 2.2 Configure Project Settings

On the Import Project page:

- **Project Name**: `sweet-dreams` (or your preferred name)
- **Framework Preset**: React
- **Root Directory**: Leave blank (or set to `./`)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 2.3 Add Environment Variables

Click "Environment Variables" and add:

**For Sandbox Testing:**
```
PAYFAST_MERCHANT_ID = 10000100
PAYFAST_MERCHANT_KEY = 46f0cd694581a
PAYFAST_PASSPHRASE = 
PAYFAST_SANDBOX = true
API_URL = https://your-project.vercel.app
```

**For Production (After Testing):**
```
PAYFAST_MERCHANT_ID = your_actual_merchant_id
PAYFAST_MERCHANT_KEY = your_actual_merchant_key
PAYFAST_PASSPHRASE = your_passphrase
PAYFAST_SANDBOX = false
API_URL = https://your-domain.com
SENDGRID_API_KEY = your_sendgrid_key
```

### 2.4 Deploy

Click "Deploy" and wait for the build to complete. Your site will be live at:

```
https://sweet-dreams.vercel.app
```

## Step 3: Verify Deployment

### 3.1 Test the Website

1. Open https://sweet-dreams.vercel.app
2. Check that all pages load correctly
3. Test responsive design on mobile

### 3.2 Test Payment Flow (Sandbox)

1. Click "Get Your Copy Now"
2. Enter test email: `test@example.com`
3. You should be redirected to PayFast sandbox
4. Use test card: `4011 1111 1111 1111`
5. Expiry: Any future date (e.g., 12/25)
6. CVV: Any 3 digits (e.g., 123)
7. Complete payment
8. Verify redirect to thank-you page

### 3.3 Check Vercel Logs

```bash
vercel logs
```

Look for any errors in payment processing.

## Step 4: Custom Domain Setup

### 4.1 Add Custom Domain to Vercel

1. Go to your Vercel project settings
2. Click "Domains"
3. Enter your domain (e.g., `sweetdreams.co.za`)
4. Click "Add"

### 4.2 Update DNS Records

Vercel will show DNS records to add. Go to your domain registrar and:

1. Add CNAME record pointing to Vercel
   - Name: `www`
   - Value: `cname.vercel.com`

2. Or update A records:
   - Name: `@`
   - Value: `76.76.19.165`

**DNS changes can take 24-48 hours to propagate.**

### 4.3 Update PayFast Settings

Once your domain is live:

1. Go to PayFast dashboard > Settings > Integration
2. Update return URLs:
   - Return URL: `https://sweetdreams.co.za/thank-you`
   - Cancel URL: `https://sweetdreams.co.za/purchase`
   - Notify URL: `https://sweetdreams.co.za/api/payfast-process?action=itn`

## Step 5: Go Live with PayFast

### 5.1 Activate PayFast Live Account

Contact PayFast support to activate live merchant account:

1. Email: support@payfast.co.za
2. Provide your website URL
3. Confirm it's ready for payments
4. They'll activate live transactions

### 5.2 Update Environment Variables

In Vercel dashboard, update:

```
PAYFAST_MERCHANT_ID = your_live_merchant_id
PAYFAST_MERCHANT_KEY = your_live_merchant_key
PAYFAST_PASSPHRASE = your_passphrase
PAYFAST_SANDBOX = false
SENDGRID_API_KEY = your_sendgrid_key
```

### 5.3 Redeploy

```bash
# Just push a change to trigger redeploy
git commit --allow-empty -m "Activate live PayFast"
git push origin main
```

Or manually trigger redeployment in Vercel dashboard.

## Step 6: Email Delivery Setup

### 6.1 Choose Email Provider

#### Option A: SendGrid (Recommended for beginners)

1. Create account at https://sendgrid.com
2. Get API key from Settings > API Keys
3. Add to Vercel environment variables as `SENDGRID_API_KEY`

#### Option B: Mailgun

1. Create account at https://mailgun.com
2. Get API key from domain settings
3. Add to Vercel environment variables as `MAILGUN_API_KEY`

### 6.2 Install Email Library

In your project:

```bash
npm install @sendgrid/mail
# or
npm install mailgun.js
```

### 6.3 Update API Handler

In `api/payfast-process.ts`, add email sending:

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// In handleITN function:
if (payment_status === 'COMPLETE') {
  await sgMail.send({
    to: email_address,
    from: 'hello@sweetdreams.co.za',
    subject: '✓ Download Your Sweet Dreams Guide',
    html: `
      <h2>Thank you for your purchase!</h2>
      <p>Your Sweet Dreams baby sleep guide is ready to download.</p>
      <p><strong><a href="${process.env.PDF_URL}">Download Your PDF Here</a></strong></p>
      <p>Transaction ID: ${m_payment_id}</p>
    `,
  });
}
```

## Verification Checklist

- [ ] Website loads on vercel.app domain
- [ ] All pages work correctly
- [ ] Mobile responsive
- [ ] Sandbox payment test successful
- [ ] Custom domain configured
- [ ] DNS records pointing to Vercel
- [ ] PayFast live account activated
- [ ] Environment variables updated
- [ ] Email delivery configured
- [ ] Live payment tested
- [ ] Logs monitoring set up
- [ ] Backup plan for downtime

## Monitoring & Troubleshooting

### View Deployment Logs

```bash
# Install Vercel CLI
npm install -g vercel

# View logs
vercel logs

# View logs for specific function
vercel logs /api/payfast-process
```

### Common Issues

#### 504 Gateway Timeout
- **Cause**: Vercel function too slow
- **Solution**: Optimize database queries, cache responses

#### 500 Error on Payment
- **Cause**: Missing environment variables
- **Solution**: Check Vercel dashboard for correct env vars

#### "Cannot GET /api/payfast-process"
- **Cause**: API endpoint not deployed
- **Solution**: Ensure `api/` folder exists in root, redeploy

## Monitoring Best Practices

1. **Set up alerts**: Log all payments to database
2. **Monitor errors**: Use Vercel error tracking
3. **Daily check**: Verify no failed transactions
4. **Weekly backup**: Download transaction logs

## Scaling Notes

For high traffic:
- Vercel auto-scales, no action needed
- Consider caching with Redis
- Implement rate limiting
- Monitor bandwidth usage

## Rollback Plan

If issues occur:

```bash
# Rollback to previous deploy in Vercel dashboard
# Or manually redeploy:
git revert HEAD
git push origin main
# Vercel automatically redeploys
```

## Support

- **Vercel Help**: https://vercel.com/support
- **PayFast Support**: support@payfast.co.za
- **GitHub Issues**: Create issue in your repo

---

**Deployment Time**: ~5 minutes
**DNS Propagation**: 24-48 hours
**PayFast Activation**: 1-2 business days
