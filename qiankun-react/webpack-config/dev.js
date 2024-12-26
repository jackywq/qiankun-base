const { merge } = require("webpack-merge");
const getBaseConfig = require("./base");

module.exports = merge(getBaseConfig(false), {
  devtool: "eval-source-map",
  mode: "development",
  plugins: [],
  devServer: {
    contentBase: "dist",
    historyApiFallback: true,
    inline: true,
    open: false,
    overlay: true,
    disableHostCheck: true,
    port: 20000, // 端口
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type",
    },
    proxy: {
      "/": {
        target: "http://localhost:8081",
        pathRewrite: {
          "^/": "",
        },
        changeOrigin: true,
        // 以下是一些可选项，可根据具体需求添加
        // secure: false, // 如果后端服务器使用的是 http 协议，可以设置为 false，默认是 true（适用于 https 协议）
        // ws: true, // 是否代理 websocket 连接，默认为 false
      },
    },
  },
});
