// 轮播图逻辑
// console.log('实现轮播图的业务逻辑')
//     // tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')

// 解决多次引入资源文件

// 在index.js中引入banner.js和tabs.js
import './banner'
import './tab'
// 引入jquery.js中暴露的对象$/jquery
import $ from 'jquery'
// <!-- 需求1：在基本使用的例子中，引入jq,利用jq 给轮播图div添加给背景颜色 -->
$('#swiper').css('backgroundColor', 'red')
    // 引入css文件
    // import './styles/index.css'
    // 引入less文件
import './styles/index.less'

// 需求2：设置webpack-入口和出口

/* 1:在src同级的目录下新建一个webpack.config.js文件

需求3：插件-自动生成html文件
html-webpack-plugin插件, 让webpack打包后生成html文件并自动引入打包后的js
1:下载插件
2:配置插件
需求4：插件-自动清除dist目录内容(clean-webpack-plugin)
1:下载插件
2:配置插件
需求5:webpack-dev-server插件的使用(自动启动服务)
1:下载插件
2:配置插件
需求6：加载器 - 处理css文件问题
1:下载插件
2:配置插件







*/