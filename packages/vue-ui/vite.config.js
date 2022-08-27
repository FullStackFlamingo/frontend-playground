import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

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
  plugins: [vuePlugin(), svgLoader({ svgo: false })],
  build: {
    manifest: true,
    ssrManifest: true,
    rollupOptions: {
      input: './src/entry-client.js',
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@private/design-system/vars.scss";`,
      },
    },
  },
});
