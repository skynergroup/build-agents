# build-agents

Production-ready **Astro landing site** for Build Agents.

## Stack
- Astro (static output)
- CSS (custom, responsive)
- Vercel deployment

## Local development
```bash
npm install
npm run dev
```
Open: <http://localhost:4321>

## Production build
```bash
npm run build
```
Output directory: `dist/`

## ngrok (local sharing + webhook testing)
Use ngrok to expose local dev safely for quick demos and integration tests.

### 1) Run the app
```bash
npm run dev -- --host 0.0.0.0 --port 4321
```

### 2) Start ngrok tunnel
```bash
ngrok http 4321
```

### 3) Use the HTTPS forwarding URL
Example:
- `https://<random>.ngrok-free.app`

Use this URL for:
- remote UI review
- webhook callback testing
- temporary integration demos

## Notes
- Use **ngrok for development/testing**, not production.
- Use **Vercel** for preview + production deployments.
- Free ngrok URLs rotate unless you reserve a domain.
