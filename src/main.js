import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router';
import components from './components';
import store from './store';

import { dateConfig } from './utils/dateConfig';
import http from './utils/http';
import openConfirm from './utils/openConfirm';

import './mock/mock';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(components);

Vue.prototype.tableMaxHeight = '550px';
Vue.prototype.$dateConfig = dateConfig;
Vue.prototype.$http = http;
Vue.prototype.$openConfirm = openConfirm;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
