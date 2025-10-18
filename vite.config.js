import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevtools from 'vite-plugin-vue-devtools';
import path from 'path'; // Import the 'path' module to work with file paths

export default defineConfig({
  base: 'https://karlsvision-next.matthiasheckel.com/', // Set the base URL
  plugins: [
    vue(),
    vueDevtools()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Use path.resolve to construct file paths
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost', // Change this to the URL of your PHP server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the '/api' prefix
      },
    },
  },
});
