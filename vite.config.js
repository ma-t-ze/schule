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
      '/site-auth/proxy.php': {
        target: 'https://visualizer.matthiasheckel.com',
        changeOrigin: true,
        rewrite: () => '/proxy.php',
        cookieDomainRewrite: '',
        configure(proxy) {
          proxy.on('proxyRes', response => {
            // Only the local dev proxy uses HTTP. Production cookies stay Secure.
            const cookies = response.headers['set-cookie'];
            if (cookies) response.headers['set-cookie'] = cookies.map(cookie => cookie.replace(/;\s*Secure\b/gi, ''));
          });
        },
      },
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
}));
