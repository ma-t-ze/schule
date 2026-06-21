import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevtools from 'vite-plugin-vue-devtools';
import path from 'path'; // Import the 'path' module to work with file paths

export default defineConfig(({ command }) => ({
  base: command === 'build' ? 'https://visualizer.matthiasheckel.com/' : '/',
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
    allowedHosts: 'all',
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
}));
