# Deployment Guide - Netlify + AWS Lambda

Alternative deployment option using Netlify with AWS Lambda functions.

## Prerequisites

- GitHub repository
- Netlify account (free at netlify.com)
- AWS account (for Lambda functions)

## Option 1: Netlify (Easier Setup)

### Step 1: Deploy to Netlify

#### Method A: Connect GitHub (Recommended)

1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Select GitHub, authorize, choose repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy"

Your site is now live at `sitename.netlify.app`

#### Method B: Manual Deploy

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

### Step 2: Add Environment Variables

In Netlify dashboard:

1. Go to **Site settings > Build & deploy > Environment**
2. Click "Edit variables"
3. Add:

```
PAYFAST_MERCHANT_ID = 10000100
PAYFAST_MERCHANT_KEY = 46f0cd694581a
PAYFAST_PASSPHRASE = 
PAYFAST_SANDBOX = true
API_URL = https://sitename.netlify.app
```

### Step 3: Set Up Netlify Functions

**Option A: Use Vercel (Simpler)**
- Deploy API to Vercel separately
- Call from Netlify frontend
- See DEPLOYMENT_VERCEL.md

**Option B: Use Netlify Functions**

Create `netlify/functions/payfast-process.js`:

```javascript
const crypto = require('crypto');

function generateSignature(data, passPhrase) {
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

exports.handler = async (event) => {
  const { action } = event.queryStringParameters || {};

  if (action === 'form') {
    const { amount, email } = JSON.parse(event.body);
    
    const formData = {
      merchant_id: process.env.PAYFAST_MERCHANT_ID,
      merchant_key: process.env.PAYFAST_MERCHANT_KEY,
      return_url: `${process.env.API_URL}/thank-you`,
      cancel_url: `${process.env.API_URL}/purchase`,
      notify_url: `${process.env.API_URL}/.netlify/functions/payfast-process?action=itn`,
      amount: parseFloat(amount).toFixed(2),
      item_name: 'Sweet Dreams: Baby Sleep Guide (PDF)',
      email_address: email,
      m_item_id: 'sweet-dreams-guide',
    };

    const signature = generateSignature(formData, process.env.PAYFAST_PASSPHRASE);
    formData.signature = signature;

    const endpoint = process.env.PAYFAST_SANDBOX === 'true'
      ? 'https://sandbox.payfast.co.za/eng/process'
      : 'https://www.payfast.co.za/eng/process';

    return {
      statusCode: 200,
      body: JSON.stringify({ formData, endpoint }),
    };
  }

  if (action === 'itn') {
    // Handle ITN webhook
    console.log('ITN received:', event.body);
    return {
      statusCode: 200,
      body: 'OK',
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ error: 'Invalid action' }),
  };
};
```

Then deploy:

```bash
git add netlify/functions/
git commit -m "Add Netlify functions"
git push
# Netlify auto-deploys
```

## Option 2: AWS Lambda + API Gateway

### Step 1: Create Lambda Function

```bash
mkdir lambda-payfast
cd lambda-payfast
npm init -y
npm install crypto
```

Create `index.js` with PayFast logic (similar to Netlify).

### Step 2: Deploy to AWS

```bash
# Install AWS CLI
npm install -g aws-cli

# Configure credentials
aws configure

# Deploy function
zip -r function.zip .
aws lambda create-function \
  --function-name payfast-process \
  --runtime nodejs18.x \
  --zip-file fileb://function.zip \
  --handler index.handler \
  --role arn:aws:iam::YOUR_ROLE:role/lambda-role
```

### Step 3: Create API Gateway

1. Go to AWS API Gateway console
2. Create new REST API
3. Create resource `/payfast-process`
4. Integrate with Lambda function
5. Deploy and copy endpoint URL

### Step 4: Update Frontend

Replace API endpoint in Purchase component:

```typescript
const API_ENDPOINT = 'https://your-api-gateway-url.execute-api.region.amazonaws.com/payfast-process';
```

## Comparison

| Feature | Vercel | Netlify | AWS Lambda |
|---------|--------|---------|-----------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Cost** | Free tier generous | Free tier generous | Pay per use (~$0) |
| **Performance** | Excellent | Excellent | Good |
| **Cold Starts** | Minimal | Minimal | Noticeable |
| **Support** | Excellent | Good | Self-service |

## Recommendation

**For beginners**: Use **Vercel** (easiest)
**For budget-conscious**: Use **Netlify**
**For enterprise**: Use **AWS Lambda**

---

See DEPLOYMENT_VERCEL.md for detailed Vercel setup.
