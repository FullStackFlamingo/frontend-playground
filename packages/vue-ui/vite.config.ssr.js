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
      input: './src/entry-server.js',
      output: {
        entryFileNames: 'entry-server.js',
      },
    },
    outDir: './dist/server',
  },
});
