import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3200,
    strictPort: true,
    hmr: {
      clientPort: 3200,
    },
  },
  base: '/frontend/@private/react-ui/',
  plugins: [
    react({
      babel: {
        plugins: [
          [
            // https://github.com/styled-components/babel-plugin-styled-components/issues/350#issuecomment-979873241
            'babel-plugin-styled-components',
            {
              ssr: true,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  build: {
    manifest: true,
    ssrManifest: true,
    rollupOptions: {
      input: './src/entry-client.tsx',
    },
  },
});
