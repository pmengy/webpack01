// 设置webpack-入口和出口
const path = require('path');
// 配置出入口
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "bundle.js" // 修改出口文件名为bundle.js
            // __dirname 可以用来动态获取当前文件所属目录的绝对路径
            // /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口
            // path.resolve(__dirname, "dist"),
            // /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口/dist
    }
}