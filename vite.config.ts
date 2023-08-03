import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        target: 'https://myohanmeeting-backend-lq2ln24hga-uw.a.run.app/swagger-ui/index.html',
        changeOrigin: true,
        secure: false,
        rewrite:(path)=>path.replace(/^\/v1/, "/v1/")
      }
    }
  }
});
