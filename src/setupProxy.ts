import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = (app: any) => {
  app.use(
    createProxyMiddleware("", {
      target: "http://ec2-3-35-65-74.ap-northeast-2.compute.amazonaws.com",
      changeOrigin: true,
    })
  );
};
