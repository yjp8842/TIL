const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  // app.use( // local로 돌릴때 필요한 설정
  //   "/api",
  //   createProxyMiddleware({
  //     target: "http://localhost:8080",
  //     changeOrigin: true,
  //     pathRewrite: { 
  //       '^/api': '' // URL ^/api -> 공백 변경
  //     }
  //   })
  // );  
  // app.use(
  //   "/ws",
  //   createProxyMiddleware({ 
  //     target: "http://localhost:8080",
  //     ws: true })
  //     );
  app.use( // 배포한 서버에 
    "/api",
    createProxyMiddleware({
      target: "https://i8a406.p.ssafy.io",
      changeOrigin: true,
    })
  );
  app.use(
    "/ws",
    createProxyMiddleware({ 
      target: "https://i8a406.p.ssafy.io",
      ws: true })
  );
};