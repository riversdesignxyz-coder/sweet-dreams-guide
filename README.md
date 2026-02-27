# Sweet Dreams Website Builder

A modern React + TypeScript website for the "Sweet Dreams" baby sleep guide, built with Vite and Tailwind CSS.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx       # Navigation header with mobile menu
│   └── Footer.tsx       # Footer with links
├── pages/
│   ├── Home.tsx         # Landing page with features & testimonials
│   ├── Preview.tsx      # Free preview chapter
│   ├── FAQ.tsx          # FAQ section
│   ├── Purchase.tsx     # Purchase page with PayFast integration
│   └── ThankYou.tsx     # Thank you page after purchase
├── App.tsx              # Main app component with routing
├── main.tsx             # Entry point
├── index.css            # Global styles with Tailwind
└── App.css              # App-specific styles

public/                  # Static assets
```

## Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Modern Stack**: React 18 + TypeScript + Tailwind CSS + Vite
- **PayFast Integration**: Ready for payment processing (sandbox mode by default)
- **SEO Optimized**: Proper meta tags and structure
- **Fast Performance**: Optimized build with Vite
- **Email Collection**: Ready for email capture on purchase
- **Testimonials**: 7 diverse South African testimonials

## Setup Instructions

### 1. Install Node.js and npm

Visit [nodejs.org](https://nodejs.org/) and download the LTS version, or use:

```bash
# Windows (via Chocolatey)
choco install nodejs

# Windows (via Scoop)
scoop install nodejs

# macOS (via Homebrew)
brew install node

# Linux (Ubuntu/Debian)
sudo apt install nodejs npm
```

**After installation, restart your terminal/VS Code.**

### 2. Install Dependencies

```bash
npm install
```

### 3. Development Server

```bash
npm run dev
```

This starts the dev server at `http://localhost:3000` with hot reload enabled.

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## PayFast Configuration

The checkout form is currently in **Sandbox Mode** for testing. To go live:

1. **Create a PayFast account**: https://www.payfast.co.za
2. **Get your credentials**:
   - Go to Settings > Integration in your PayFast dashboard
   - Copy your Merchant ID and Merchant Key
3. **Update the form** in `src/pages/Purchase.tsx`:
   - Replace `merchant_id` value
   - Replace `merchant_key` value
   - Change form action from `https://sandbox.payfast.co.za/eng/process` to `https://www.payfast.co.za/eng/process`
   - Update `return_url` to your actual domain
   - Set up your `notify_url` endpoint for payment notifications

## Deployment Options

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

### Option 3: GitHub Pages

Update `vite.config.ts` with `base: '/repository-name/'` and:

```bash
npm run build
npm install -g gh-pages
npx gh-pages -d dist
```

### Option 4: Traditional Hosting

Build the project and upload the `dist/` folder to your hosting provider.

## Customization

### Colors & Branding

Edit `tailwind.config.js` to customize colors, or modify the inline color classes in components.

### Testimonials

Update the testimonials array in `src/pages/Home.tsx` to add or change reviews.

### Price

Change the price in:
- `src/pages/Home.tsx` (hero CTA section)
- `src/pages/Purchase.tsx` (payment form - update the `amount` input value)

### Email Configuration

Replace email addresses:
- `src/pages/FAQ.tsx` - support email
- `src/pages/ThankYou.tsx` - contact email
- Payment callbacks in `src/pages/Purchase.tsx`

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Lazy-loaded routes with React Router
- Optimized images
- Minified CSS/JS
- Fast initial load with Vite
- Responsive images with srcset

## Security

- Content Security Policy ready
- No hardcoded sensitive data
- Uses HTTPS-only payment gateway
- Input validation on forms

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliant

## License

All rights reserved. Custom guide content not included in this repository.

## Support

For issues or questions, contact hello@sweetdreams.co.za

---

**Last Updated**: February 2026
