import { defineConfig } from 'vite';
import baseConfig from './vite.config';

// https://vitejs.dev/config/
export default defineConfig({
  ...baseConfig,
  ssr: {
    format: 'cjs',
  },
  build: {
    ssr: true,
    rollupOptions: {
      output: {
        entryFileNames: 'entry-server.js',
      },
      input: './src/entry-server.tsx',
    },
    outDir: './dist/server',
  },
});
