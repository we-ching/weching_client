import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = (app: any) => {
  app.use(
    createProxyMiddleware("", {
      target: "http://3.35.65.74:3000",
      changeOrigin: true,
    })
  );
};
