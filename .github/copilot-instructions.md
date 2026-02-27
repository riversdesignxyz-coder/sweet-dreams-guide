<!-- Copilot Instructions for Sweet Dreams Website -->

# Sweet Dreams Website Builder - Project Guidelines

## Project Overview
- **Type**: React + TypeScript web application (Vite)
- **Framework**: React 18 with React Router for navigation
- **Styling**: Tailwind CSS with custom components
- **Payment**: PayFast integration (currently in sandbox mode)
- **Purpose**: E-commerce website for baby sleep guide PDF

## Key Technologies
- React 18.2
- TypeScript 5.3
- Vite 5.0
- Tailwind CSS 3.3
- React Router v6
- PostCSS with Autoprefixer

## Project Structure
```
src/
├── components/    # Reusable UI components
├── pages/         # Page components (routed)
├── App.tsx        # Main router setup
├── main.tsx       # Entry point
└── styles/        # Global styles
```

## Important Setup Notes

### Before Running
1. **Node.js Required**: Must have Node.js 16+ installed
2. **Dependencies**: Run `npm install` to get all packages
3. **Development**: Use `npm run dev` to start dev server at localhost:3000
4. **Production**: Use `npm run build` then `npm run preview`

### PayFast Integration Points
- Location: `src/pages/Purchase.tsx`
- Currently uses: Sandbox credentials (10000100)
- To go live: Replace with real merchant credentials and change endpoint URL
- Sensitive data: NEVER hardcode in frontend - move to backend

### Styling Approach
- Use Tailwind utility classes primarily
- Avoid custom CSS where possible
- Responsive: Mobile-first design
- Color scheme: Blues, purples, golds (see Home.tsx for palette)

## Common Customizations

### Update Price
1. `src/pages/Home.tsx` - CTA section
2. `src/pages/Purchase.tsx` - PayFast form amount

### Add/Change Testimonials
- Edit testimonials array in `src/pages/Home.tsx`
- Ensure diversity in locations and professions

### Change Contact Email
- `src/pages/FAQ.tsx`
- `src/pages/ThankYou.tsx`
- Payment redirect URLs

### Update PayFast Details
- Never in frontend - use backend webhook
- Merchant ID and Key must be environment variables

## Performance Considerations
- Vite ensures fast hot module replacement
- Tailwind CSS is optimized at build time
- Static assets should go in `public/` folder
- Code splitting happens automatically with React Router

## Code Standards
- Use TypeScript strict mode
- Components as named exports
- Props should be typed interfaces
- Use ESLint rules (package includes rules)
- No console.log in production

## Common Tasks with ChatGPT Copilot
- "Add a new page layout matching the design"
- "Update testimonials with new South African profiles"
- "Help me deploy to Vercel"
- "Create a new component for..."
- "Fix styling issues on mobile"

## Deployment Checklist
- [ ] PayFast credentials configured (backend only)
- [ ] Environment variables set
- [ ] Build succeeds: `npm run build`
- [ ] No console errors in preview
- [ ] Mobile responsive check
- [ ] Email redirects working
- [ ] Analytics installed (if needed)

## Gotchas / Known Issues
- Node.js must be in system PATH (not just installed)
- Tailwind JIT mode requires proper content configuration
- PayFast emails might go to spam - test thoroughly
- Mobile menu closes on navigation (by design)
- Responsive images should use next-gen formats

## Future Enhancements
- Email collection via Mailchimp/ConvertKit
- Blog section for tips
- Customer portal for downloads
- Analytics dashboard
- SMS notifications
- Affiliate program

---

**Last Updated**: February 27, 2026
