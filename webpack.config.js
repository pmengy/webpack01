const path = require("path");
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//自动清除
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js", // 入口
  output: {
    path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
    filename: "bundle.js", // 出口文件名
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
      filename: "index.html", // 生成文件的名称
    }),
  ],
  devServer: {
    port: 3000, // 端口号
    open: true,
  },
  module: {
    // loader 加载器 配置在这儿
    rules: [
      // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // loader 执行的顺序： use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/, // 匹配执行类型的文件
        // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
        // 执行的顺序 less-loader css-loader style-loader
        // less-loader 先把less代码转换成css
        // css-loader 再把css代码转换成webpack 可以识别的js代码
        // style-loader 在把css代码插入到 dom中
        use: ["style-loader", "css-loader", "less-loader"],
      },
      //config.js 配置
      //   {
      //     test: /\.(png|jpg|gif|jpeg)$/i,
      //     use: [
      //       {
      //         loader: "url-loader", // 匹配文件, 尝试转base64字符串打包到js中
      //         // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
      //         options: {
      //           limit: 8 * 1024,
      //         },
      //       },
      //     ],
      //   },
      {
        // 图片文件的配置(仅适用于webpack5版本)
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: "asset", // 在导出一个 data URI 和发送一个单独的文件之间自动选择
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
        // type: 'asset/resource' // 发送一个单独的文件并导出 URL
        // type: 'asset/inline' // 导出一个资源的 data URI
      },
    ],
  },
};
