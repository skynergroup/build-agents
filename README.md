# build-agents

A production-ready **Next.js landing site** for Build Agents — a no-code AI agent builder for non-technical users.

## Stack
- Next.js (App Router)
- TypeScript
- CSS (custom, responsive)
- GitHub Actions (auto deploy to GitHub Pages)

## Local development
```bash
npm install
npm run dev
```
Open: <http://localhost:3000>

## Production build
```bash
npm run build
```
This generates a static export in `out/`.

## Deployment
Deployment is automated via GitHub Actions workflow:
- `.github/workflows/deploy-pages.yml`

Expected Pages URL:
- `https://skynergroup.github.io/build-agents/`

If Pages is not enabled yet in repo settings, enable:
- **Settings → Pages → Build and deployment → Source: GitHub Actions**
