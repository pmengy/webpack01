// 轮播图逻辑
// console.log('实现轮播图的业务逻辑')
// // tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')

import './banner.js';
import './tabs.js';

import $ from 'jquery';
// $('#swiper').css('background-color', 'pink')

import './style/index.css';
import './style/index.less';

// index.js
import imgUrl from './assets/1.gif';
const img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

// 引入图片-使用
import imgUrl1 from './assets/logo_small.png';
const theImg = document.createElement('img');
theImg.src = imgUrl1;
document.body.appendChild(theImg);

// 引入字体图标文件
import './assets/fonts/iconfont.css';

class App {
  static a = 123;
}

console.log(App.a);

// import './app.vue'
