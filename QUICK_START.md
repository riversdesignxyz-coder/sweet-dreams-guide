# Quick Start Guide - Sweet Dreams Website

## ⚡ 5-Minute Setup

### Step 1: Install Node.js

If you don't have Node.js installed yet:

**Windows:**
- Download from https://nodejs.org (LTS version)
- Run the installer
- **Restart your terminal or VS Code after installation**

**macOS:**
```bash
brew install node
```

**Linux (Ubuntu):**
```bash
sudo apt install nodejs npm
```

### Step 2: Run the Setup Script

Choose ONE option:

**Option A: Batch Script (Windows Command Prompt)**
```
setup.bat
```

**Option B: PowerShell Script (Windows PowerShell)**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
./setup.ps1
```

**Option C: Manual Installation**
```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

Your website will open at `http://localhost:3000`

---

## 📁 Project Files Overview

### Pages You Can Edit

- **Home Page** (`src/pages/Home.tsx`) - Main landing page
  - Change headline, testimonials, pricing
  - Add/modify features and chapters list

- **Purchase Page** (`src/pages/Purchase.tsx`) - Checkout page
  - Update payment details (PayFast integration)
  - Modify product benefits

- **FAQ Page** (`src/pages/FAQ.tsx`) - Frequently asked questions
  - Add or edit questions and answers

- **Preview Page** (`src/pages/Preview.tsx`) - Free sample chapter
  - Replace with your actual preview content

### Components You Can Reuse

- **Header** (`src/components/Header.tsx`) - Navigation bar
- **Footer** (`src/components/Footer.tsx`) - Footer section

---

## 🎨 Common Customizations

### Change the Price

1. Open `src/pages/Home.tsx`
2. Find `"Get the Guide — R99"` and change `99` to your price
3. Do the same in `src/pages/Purchase.tsx`

```javascript
// In Purchase.tsx, find the PayFast form and update:
<input type="hidden" name="amount" value="99.00" />
```

### Update Testimonials

In `src/pages/Home.tsx`, find the testimonials array and edit:

```javascript
const testimonials = [
  { 
    stars: 5, 
    text: "Your testimonial here",
    name: "Person Name",
    detail: "Role, Location",
    avatar: "PN" 
  },
  // ... more testimonials
]
```

### Change Colors

Edit the Tailwind classes in components:
```jsx
// Change from this:
className="bg-blue-600"

// To this:
className="bg-purple-600"
```

Available colors: blue, purple, green, yellow, orange, red, pink, etc.

### Update Contact Email

1. `src/pages/FAQ.tsx` - Email link in FAQ section
2. `src/pages/ThankYou.tsx` - Support email link

---

## 💳 PayFast Payment Setup

### For Testing (Sandbox)
The site is pre-configured with PayFast sandbox credentials. Test payments work with card: `4011111111111111`

### For Live (Production)
1. Create account at https://www.payfast.co.za
2. Get your merchant ID and key from PayFast dashboard
3. Open `src/pages/Purchase.tsx`
4. Find the PayFast form and update:
   ```jsx
   <input type="hidden" name="merchant_id" value="YOUR_ID_HERE" />
   <input type="hidden" name="merchant_key" value="YOUR_KEY_HERE" />
   ```
5. Change form action URL:
   - From: `https://sandbox.payfast.co.za/eng/process`
   - To: `https://www.payfast.co.za/eng/process`

---

## 🚀 Building for Production

### Create Optimized Build

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready to deploy.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 🌐 Deployment

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```
Follow the prompts and your site is live!

### Option 2: Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your web server to serve `dist/index.html` for all routes

---

## 📱 Mobile Testing

The site is fully responsive. Test on mobile by:
1. Open DevTools (F12)
2. Click the mobile icon
3. Test at different screen sizes

---

## ✏️ Content Editing Tips

### Best Practices
- Keep testimonials authentic and specific to South Africa
- Update pricing consistently everywhere it appears
- Use short, scannable headings
- Keep paragraphs to 2-3 sentences max
- Add emojis sparingly for visual interest

### File Locations
All content editing happens in `src/` folder:
```
src/pages/       ← Edit page content here
src/components/  ← Edit header/footer here
src/App.tsx      ← Route definitions (don't change unless adding pages)
```

---

## 🐛 Troubleshooting

### "npm: The term 'npm' is not recognized"
- Node.js isn't installed or not in PATH
- **Solution**: Install Node.js, restart terminal, try again

### Blank page or errors in browser
- Check browser console (F12)
- Look for red errors
- Try `npm install` again

### CSS styling looks wrong
- Tailwind classes might not be compiling
- **Solution**: Stop dev server, run `npm install`, restart with `npm run dev`

### Port 3000 already in use
- Another app is using port 3000
- **Solution**: Kill the process or Vite will ask to use a different port

---

## 📚 Learning Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev
- **Vite**: https://vitejs.dev/guide/
- **React Router**: https://reactrouter.com/

---

## 📞 Support

Need help? 
1. Check the FAQ page in the site
2. Review comments in the code
3. Check the README.md file
4. Contact: hello@sweetdreams.co.za

---

**Happy building! 🌙**
