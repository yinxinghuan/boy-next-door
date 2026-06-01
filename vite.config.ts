import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/boy-next-door/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5213,
    strictPort: true,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  css: {
    preprocessorOptions: {
      less: { javascriptEnabled: true },
    },
  },
});
