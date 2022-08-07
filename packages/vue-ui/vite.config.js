import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3210,
    strictPort: true,
    hmr: {
      clientPort: 3210,
      // port: 3211,
    },
  },
  base: '/frontend/@private/vue-ui/',
  plugins: [vuePlugin()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/entry-client.js',
    },
  },
});
