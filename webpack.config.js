// 设置webpack-入口和出口
const path = require('path');
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
    // 引入自动清除dist文件夹下的文件的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 配置出入口
module.exports = {
    module: { // loader 加载器 配置在这儿
        rules: [ // loader的规则
            {
                test: /\.css$/, // 匹配所有的css文件
                // loader 执行的顺序： use数组里从右向左运行
                // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
                // 再用 style-loader 将样式, 把css插入到dom中
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    mode: 'development',
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "main.js" // 修改出口文件名为bundle.js
            // __dirname 可以用来动态获取当前文件所属目录的绝对路径
            // /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口
            // path.resolve(__dirname, "dist"),
            // /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口/dist
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
            filename: 'index.html' // 生成文件的名称
        }),
        new CleanWebpackPlugin() // 删除的是ouput path 里配置的那个输出文件的文件夹
        // 默认情况下dist
    ],
    devServer: {
        port: 3000, //设置自定义 端口号
        open: true //设置自动打开页面
    },

}