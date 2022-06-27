// import './app.vue';
// 引入js模块
import './banner.js';
import './tabs.js';
// 引入css
import './styles/index.css'

// 引入less
// import './styles/index.less';

// index.js
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

import imgUrl1 from './/assets/logo_small.png';

let img1 = document.createElement('img');
img1.src = imgUrl1;
document.body.appendChild(img1);
