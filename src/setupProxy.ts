import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = (app: any) => {
  app.use(
    createProxyMiddleware('', {
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};
