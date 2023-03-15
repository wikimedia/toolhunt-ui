const express = require("express");
require("dotenv").config();

const app = express();
const PORT = parseInt(process.env.PORT, 10); // Set server port
const { createProxyMiddleware } = require("http-proxy-middleware");

// Set 60 Seconds timeout for proxy requests
const TIMEOUT = 60 * 1000;

app.use(express.static("dist"));

// Set up api proxy
const toolhuntApiProxy = () => {
  return createProxyMiddleware({
    target: process.env.VITE_FLASK_BACKEND_URL,
    changeOrigin: true,
    logger: console,
    proxyTimeout: TIMEOUT,
    timeout: TIMEOUT,
    onProxyRes: (proxyRes, req, res) => {
      // log original request and proxied request info
      const exchange = `[${req.method}] [${proxyRes.statusCode}] ${req.path} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path}`;
      console.log(exchange); // [GET] [200] / -> http://www.example.com
      const cleanup = (err) => {
        // cleanup event listeners to allow clean garbage collection
        proxyRes.removeListener("error", cleanup);
        proxyRes.removeListener("close", cleanup);
        res.removeListener("error", cleanup);
        res.removeListener("close", cleanup);

        // destroy all source streams to propagate the caught event backward
        req.destroy(err);
        proxyRes.destroy(err);
      };

      proxyRes.once("error", cleanup);
      proxyRes.once("close", cleanup);
      res.once("error", cleanup);
      res.once("close", cleanup);
    },
  });
};
app.use("/api", toolhuntApiProxy());
app.use("/openapi.json", toolhuntApiProxy());

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
