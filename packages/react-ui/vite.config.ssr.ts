import { defineConfig } from 'vite';
import baseConfig from './vite.config';

// https://vitejs.dev/config/
export default defineConfig({
  ...baseConfig,
  build: {
    ssr: true,
    rollupOptions: {
      input: './src/entry-server.tsx',
    },
    outDir: './dist/server',
  },
});
