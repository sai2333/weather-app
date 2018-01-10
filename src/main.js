// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import utils from './utils/replaceImg'
import tool from './utils/lifeImg'
import store from './store/index'
// import './assets/fontcss/iconfont.css'

Vue.config.productionTip = false
//将api方法绑定到全局
Vue.prototype.api = api
Vue.prototype.$utils = utils
Vue.prototype.$tool = tool

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
