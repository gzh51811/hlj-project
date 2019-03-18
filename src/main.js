import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$axios = axios
// 引入路由模块
import router from "./configs/router.js";


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
