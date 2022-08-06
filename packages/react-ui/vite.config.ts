import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3200,
    hmr: {
      clientPort: 3200,
    },
  },
  base: '/frontend/react-ui/',
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/entry-client.tsx',
    },
  },
});
