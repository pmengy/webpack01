const path = require('path');
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径 绝对路径
    filename: 'index.js', // 出口文件名
  },
  plugins: [
    // 插件是字段 plugins 里配置
    new HtmlWebpackPlugin({
      template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
      filename: 'index.html', // 生成文件的名称
    }),
    // new CleanWebpackPlugin(),
  ],
  // webpack-dev-server 配置
  devServer: {
    port: 3000, // 端口号
    open: true, // 自动打开
  },
};
