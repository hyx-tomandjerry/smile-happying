// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/normalize.css'
import './assets/css/main.css'
import '../static/iconfont/icon.css'
Vue.config.productionTip = false

//引入vue-awesome-swiper

import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper)





import {Button,Row,Col,Swipe,SwipeItem,Lazyload} from "vant";
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem)
  .use(Lazyload)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
