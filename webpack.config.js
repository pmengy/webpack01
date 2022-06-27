const path = require("path");
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入自动清除dist目录内容
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js", // 入口
  output: {
    path: path.join(__dirname, "dist"), // 出口路径
    filename: "bundle.js", // 出口文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", //告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
      filename: "index.html", //生成文件的名称
    }),
    // new CleanWebpackPlugin(), // 删除的是ouput path 里配置的那个输出文件的文件夹 // 默认情况下dist
  ],
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
      // loader的规则
      {
        test: /\.less$/, // 匹配所有的css文件
        // loader 执行的顺序： use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // 图片文件的配置(仅适用于webpack5版本)
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: "asset", // 在导出一个 data URI 和发送一个单独的文件之间自动选择
        // 如果你设置的是asset模式
        // 以8KB大小区分图片文件
        // 小于8KB的, 把图片文件转base64, 打包进js中
        // 大于8KB的, 直接把图片文件输出到dist下
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: "[hash:6] [ext]",
        },
        // type: 'asset/resource' // 发送一个单独的文件并导出 URL
        // type: 'asset/inline' // 导出一个资源的 data URI
      },
      {
        // 处理字体图标的解析
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 2 * 1024,
              // 配置输出的文件名
              name: "[name].[ext]",
              // 配置输出的文件目录
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
};
