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

// 需求2：设置webpack-入口和出口

/* 1:在src同级的目录下新建一个webpack.config.js文件






*/