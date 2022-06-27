import "./banner.js";
import "./tabs.js";
import './styles/index.css'
// import './styles/index.less';
import $ from "jquery";
// $("#swiper").css("background-color", "red");

// index.js
import imgUrl from './assets/1.gif';
// 引入字体图标文件
import './assets/fonts/iconfont.css'

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);
// 再次引入图片-使用
import imgErl from './assets/1.gif'
const theImg = document.createElement("theImg")
theImg.src = imgErl
document.body.appendChild(theImg)

class App {
    static a = 123
  }
  
  console.log(App.a)