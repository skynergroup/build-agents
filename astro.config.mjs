import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://build-agents.vercel.app',
  output: 'static',
  vite: {
    server: {
      host: true,
      allowedHosts: ['.ngrok-free.app', 'localhost', '127.0.0.1'],
    },
    preview: {
      host: true,
      allowedHosts: ['.ngrok-free.app', 'localhost', '127.0.0.1'],
    },
  },
});
