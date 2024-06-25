import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  npmClient: 'pnpm',
  routes,
  antd: {},
  tailwindcss: {},
  layout: {
    title: 'UMI',
    locale: false,
  },
  request: {},
  model: {},
  initialState: {},
  proxy: {
    '/api/': {
      target: 'http://localhost:7001',
      changeOrigin: true,
    },
  },
});
