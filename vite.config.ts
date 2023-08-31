import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MeMyo-Frontend/",
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        target: 'http://34.125.176.70:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/v1/, '/v1/'),
      },
    },
  },
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@types', replacement: '/src/types' },
      { find: '@redux', replacement: '/src/redux' },
      { find: '@reducers', replacement: '/src/reducers' },
      { find: '@', replacement: '/src' },
    ],
  },
});
