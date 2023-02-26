import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = (app: any) => {
  app.use(
    createProxyMiddleware("", {
      target: "http://13.125.218.237:3000",
      changeOrigin: true,
    })
  );
};
