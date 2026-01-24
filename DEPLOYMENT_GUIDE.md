# Deployment Guide - GitHub Pages

This guide outlines how to deploy your portfolio to GitHub Pages using the `gh-pages` package.

## Prerequisites

- GitHub account and a repository for this project.
- Node.js installed locally.

## Setup (Already Configured)

The project is pre-configured for deployment with:
1. `gh-pages` dependency in `package.json`.
2. `deploy` script in `package.json`: `"deploy": "gh-pages -d dist"`.
3. `base` path in `vite.config.js` (Ensure this is set if your repo is not at the root domain).

**Important:** If your repository name is `devansh-portfolio` and you are deploying to `username.github.io/devansh-portfolio/`, ensure `vite.config.js` has:
```javascript
export default defineConfig({
  base: '/devansh-portfolio/',
  plugins: [react()],
})
```

## Deployment Steps

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. **Build and Deploy:**
   Run the deploy script which builds the project and pushes the `dist` folder to the `gh-pages` branch.
   ```bash
   npm run deploy
   ```

3. **Verify Deployment:**
   - Go to your GitHub repository settings -> Pages.
   - Ensure the source is set to `gh-pages` branch.
   - Visit the provided URL (e.g., `https://devisdev365.github.io/devansh-portfolio/`).

## Automating with GitHub Actions (Optional)

You can also set up a GitHub Action to deploy automatically on push to `main`. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install and Build
        run: |
          npm install
          npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```
