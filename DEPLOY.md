# Deployment Guide

## Quick Steps to Deploy to Vercel

### 1. Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Wedding site"

# Create a new repository on GitHub (via github.com)
# Then connect it:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Via Vercel Dashboard (Easiest)**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project
5. Click "Deploy" (no configuration needed!)

**Option B: Via Vercel CLI**
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Follow the prompts to link to your GitHub repo
```

### 3. Connect Your Custom Domain

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Add your domain name
3. Vercel will provide DNS records to add:
   - Add an A record pointing to Vercel's IP
   - Or add a CNAME record (easier)
4. Update your domain's DNS settings at your domain registrar
5. Wait for DNS propagation (usually 5-30 minutes)

### 4. Important Notes

- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 5. Environment Variables

If you need any environment variables later, add them in:
**Settings** → **Environment Variables** in Vercel dashboard

### 6. Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = automatic production deployment
- Every pull request = preview deployment

## Troubleshooting

If images don't load:
- Make sure images are in `/public/images/` folder
- Check that file paths use `/images/` (not `./images/`)

If fonts don't load:
- Ensure font files are in `/public/fonts/` folder
- Check browser console for 404 errors

