// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // ...省略其他代码
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
      filename: "index.html", // 生成文件的名称
    }),
  ],
};
