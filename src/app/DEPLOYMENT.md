# 🚀 Deployment Guide for InternHunt Landing Page

## 📋 Current Project Structure

Your project is now ready for deployment with this structure:

```
internhunt-landing/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── .gitignore
├── README.md
├── main.tsx                    ← Entry point
├── App.tsx                     ← Main component
├── components/
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/                     ← Shadcn components
│       └── (all UI components)
└── styles/
    └── globals.css
```

## 🎯 Step-by-Step GitHub & Vercel Deployment

### Step 1: Prepare Your Local Project

1. **Create a new folder** on your computer:
   ```bash
   mkdir internhunt-landing
   cd internhunt-landing
   ```

2. **Copy ALL files** from Figma Make into this folder:
   - Copy the exact folder structure shown above
   - Make sure to include the `components/` and `styles/` folders

### Step 2: Initialize Git & Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: InternHunt landing page"

# Create a new repository on GitHub (via web interface)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/internhunt-landing.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**
6. ✅ Done! Your site will be live in ~2 minutes

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, then deploy to production
vercel --prod
```

### Step 4: Configure Custom Domain (Optional)

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 🔧 Local Development

To test locally before deploying:

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Visit http://localhost:5173
```

## ⚡ Important Notes

- **Node Version**: Use Node.js 18 or higher
- **Environment**: No environment variables needed (all frontend)
- **Build Time**: ~30 seconds
- **Streamlit Link**: Already configured to `https://internhunt.streamlit.app/`

## 🐛 Troubleshooting

### Build fails with "motion not found"
```bash
npm install motion@11.15.0 --save
```

### Import errors
Make sure all paths use `@/` prefix (already configured)

### Deployment succeeds but site is blank
Check browser console for errors and ensure `index.html` is in root

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vite.dev
- GitHub Issues: Create an issue in your repo

---

🎉 **You're all set!** Your InternHunt landing page is ready for the world.
