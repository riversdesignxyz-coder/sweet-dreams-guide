# Complete Integration Reference

This document serves as your complete reference for the Sweet Dreams website setup, PayFast integration, and deployment.

## 📂 Project Files Structure

```
sweet-dreams/
├── src/
│   ├── pages/
│   │   ├── Home.tsx           ← Landing page with testimonials
│   │   ├── Purchase.tsx       ← Payment page (uses secure backend API)
│   │   ├── Preview.tsx        ← Free chapter preview
│   │   ├── FAQ.tsx            ← FAQ page
│   │   └── ThankYou.tsx       ← Post-purchase thank you
│   ├── components/
│   │   ├── Header.tsx         ← Navigation
│   │   └── Footer.tsx         ← Footer
│   ├── App.tsx                ← Router setup
│   ├── main.tsx               ← Entry point
│   └── index.css              ← Global styles (Tailwind)
│
├── api/
│   ├── payfast.ts             ← PayFast utilities (crypto, signatures)
│   └── payfast-process.ts     ← Main Vercel function (POST endpoint)
│
├── public/                    ← Static assets
├── .env.example               ← Environment variable template
├── .gitignore               ← Git ignore patterns
│
├── Documentation:
│   ├── README.md                    ← Project overview
│   ├── QUICK_START.md              ← Quick reference
│   ├── PAYFAST_SETUP.md            ← PayFast detailed guide
│   ├── DEPLOYMENT_VERCEL.md        ← Vercel deployment
│   ├── DEPLOYMENT_ALTERNATIVES.md  ← Netlify/AWS
│   └── DEPLOYMENT_SUMMARY.md       ← This quick summary
│
├── Config Files:
│   ├── package.json           ← Dependencies
│   ├── tsconfig.json          ← TypeScript config
│   ├── vite.config.ts         ← Vite config
│   ├── tailwind.config.js     ← Tailwind config
│   └── postcss.config.js      ← PostCSS config
│
└── Setup Scripts:
    ├── setup.bat              ← Windows batch setup
    └── setup.ps1              ← PowerShell setup
```

## 🔐 Security Architecture

### Frontend (React)
```
- NO sensitive data stored
- NO PayFast credentials in code
- Backend API calls for all payments
- User email only input
```

### Backend (API)
```
- PayFast credentials in environment variables
- Signature validation on every request
- ITN webhook verification
- Rate limiting (recommended)
```

### Payment Flow
```
1. User enters email on Purchase.tsx
2. Frontend calls /api/payfast-process?action=form
3. Backend generates secure form with MD5 signature
4. Frontend submits to PayFast sandbox/live
5. PayFast processes payment
6. Redirects to thank-you page OR cancel
7. PayFast sends ITN webhook to backend
8. Backend sends email with PDF download link
```

## 🚀 Quick Start Command Reference

### Local Development
```bash
npm install                  # Install dependencies
npm run dev                 # Start dev server (localhost:3000)
npm run build               # Build for production
npm run preview             # Preview production build
```

### Deployment (Vercel)
```bash
npm install -g vercel       # Install Vercel CLI
vercel                      # Deploy to Vercel
vercel logs                 # View deployment logs
vercel env ls              # List environment variables
```

### Git Operations
```bash
git init                    # Initialize git
git add .                   # Stage all files
git commit -m "msg"         # Commit changes
git push origin main        # Push to GitHub
```

## 🔑 Environment Variables Reference

### Development (`.env.local`)
```
VITE_PAYFAST_MERCHANT_ID=10000100
VITE_PAYFAST_MERCHANT_KEY=46f0cd694581a
VITE_PAYFAST_SANDBOX=true
VITE_API_URL=http://localhost:3000
```

### Production (Vercel Dashboard)
```
PAYFAST_MERCHANT_ID=your_real_merchant_id
PAYFAST_MERCHANT_KEY=your_real_merchant_key
PAYFAST_PASSPHRASE=your_passphrase
PAYFAST_SANDBOX=false
API_URL=https://your-domain.com
SENDGRID_API_KEY=optional_email_key
```

### Variable Explanation
| Variable | Purpose | Example |
|----------|---------|---------|
| `PAYFAST_MERCHANT_ID` | PayFast account ID | `10000100` (sandbox) |
| `PAYFAST_MERCHANT_KEY` | PayFast security key | `46f0cd694581a` (sandbox) |
| `PAYFAST_PASSPHRASE` | PayFast signature passphrase | Leave blank for sandbox |
| `PAYFAST_SANDBOX` | Use sandbox or live | `true` or `false` |
| `API_URL` | Backend API domain | `https://domain.vercel.app` |
| `SENDGRID_API_KEY` | Email service key | From SendGrid dashboard |

## 📊 Deployment Comparison

### Vercel (RECOMMENDED)
✅ Easiest setup
✅ Free tier generous
✅ Automatic scaling
✅ Git integration
⚠️ Cold start (minimal)

### Netlify
✅ Easy setup
✅ Free tier
✅ Git integration
⚠️ Slightly slower cold starts

### AWS Lambda
✅ Pay-per-use (very cheap)
⚠️ More complex setup
⚠️ Longer cold starts

## 🎯 Implementation Timeline

### Day 1: Setup & Testing (1 hour)
- [ ] Install Node.js
- [ ] Run `npm install`
- [ ] Test locally with `npm run dev`
- [ ] Review PAYFAST_SETUP.md

### Day 2: Deploy & Configure (30 mins)
- [ ] Create GitHub repo
- [ ] Connect Vercel
- [ ] Add environment variables
- [ ] Deploy

### Day 3: Test & Activate (1 hour)
- [ ] Test sandbox payment
- [ ] Verify thank-you page
- [ ] Activate PayFast live
- [ ] Update environment variables
- [ ] Test production payment

## 💳 Test Payment Steps

### Setup
1. Go to purchase page
2. Enter test email: `test@example.com`

### Card Details
- **Card Number**: `4011 1111 1111 1111`
- **Expiry**: Any future date (e.g., 12/25)
- **CVV**: Any 3 digits (e.g., 123)

### Expected Result
1. Redirected to PayFast sandbox
2. Can enter payment details
3. After completion → redirect to thank-you
4. Should see success message

## 🔍 Debugging Checklist

### "API not found" Error
- [ ] Check `api/` folder exists in root
- [ ] File is named `payfast-process.ts`
- [ ] Vercel has latest code deployed
- [ ] Check `vercel logs`

### "Signature mismatch" Error
- [ ] Verify merchant key in Vercel env vars
- [ ] Check passphrase matches exactly
- [ ] Sandbox has blank passphrase
- [ ] Restart Vercel deployment

### Payment Not Processing
- [ ] Email entered correctly
- [ ] JavaScript enabled in browser
- [ ] Check browser console (F12) for errors
- [ ] Verify API endpoint in network tab

### Email Not Arriving
- [ ] SendGrid API key set (if configured)
- [ ] Email added to verified senders
- [ ] Check spam folder
- [ ] Verify email config in api file

## 📈 Scaling Recommendations

### For Growing Traffic
1. Add Redis caching for PDFs
2. Implement database for transactions
3. Use CDN for static assets
4. Add rate limiting (Vercel provides this)
5. Monitor errors with Sentry/LogRocket

### Cost Optimization
- Vercel: ~$0-20/month for high traffic
- SendGrid: Free up to 100 emails/day
- Cloudflare: Free CDN for assets

## 🔗 Important Links

### Services
- **PayFast**: https://www.payfast.co.za
- **Vercel**: https://vercel.com
- **SendGrid**: https://sendgrid.com
- **GitHub**: https://github.com

### Documentation
- **PayFast API**: https://www.payfast.co.za/documentation
- **Vercel Docs**: https://vercel.com/docs
- **Node.js**: https://nodejs.org

## ✅ Final Checklist Before Launch

### Code Quality
- [ ] No console errors in dev
- [ ] All pages responsive
- [ ] Links work correctly
- [ ] Forms submit properly

### Payment
- [ ] Sandbox payment succeeds
- [ ] Thank you page displays
- [ ] Error handling works
- [ ] ITN webhook configured

### Deployment
- [ ] GitHub repo public/private configured
- [ ] Vercel connected to GitHub
- [ ] Environment variables in Vercel
- [ ] Custom domain (if applicable)

### PayFast
- [ ] Live merchant account activated
- [ ] Return URL configured
- [ ] Notify URL configured
- [ ] Email configured

### Monitoring
- [ ] Error logging enabled
- [ ] Payment logs tracked
- [ ] Email delivery tested
- [ ] Downtime alerts set

## 🎓 Key Concepts

### Digital Signatures
- Used to verify payment data wasn't tampered with
- MD5 hash of transaction data
- Both parties generate same hash = payment verified

### PayFast ITN (Instant Transaction Notification)
- Webhook PayFast sends to your server when payment completes
- Contains payment status and transaction ID
- Your server should verify signature and send email

### Environment Variables
- Keep secrets out of code
- Set in deployment platform
- Frontend can't access backend env vars (secure)

## 📞 Getting Help

1. **Check the specific guide**:
   - PayFast issues → `PAYFAST_SETUP.md`
   - Deployment issues → `DEPLOYMENT_VERCEL.md`
   - General questions → `QUICK_START.md`

2. **Check error message**:
   - Search error text in guides
   - Check GitHub issues
   - Search PayFast documentation

3. **Reach out**:
   - PayFast support: support@payfast.co.za
   - Vercel support: https://vercel.com/support
   - GitHub issues in your repo

---

**Your website is ready to go! 🎉**

These guides have everything you need. Start with `DEPLOYMENT_SUMMARY.md` for the fastest path to launch.
