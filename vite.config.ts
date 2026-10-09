import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_SECRET': JSON.stringify('prod-api-secret-8f3a91c0d2'),
  },
  build: { sourcemap: true },
  server: { host: true, cors: true },
});
