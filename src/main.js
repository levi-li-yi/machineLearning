import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';

import router from './router';
import components from './components';
import store from './store';

import { dateConfig } from './utils/dateConfig';
import http from './utils/http';
import openConfirm from './utils/openConfirm';
import tipMessage from './utils/tipMessage';
import timeDiff from './utils/timeDiff';

import './mock/mock';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(components);

Vue.prototype.tableMaxHeight = '550px';
Vue.prototype.$dateConfig = dateConfig;
Vue.prototype.$http = http;
Vue.prototype.$openConfirm = openConfirm;
Vue.prototype.$tipMessage = tipMessage;
Vue.prototype.$timeDiff = timeDiff;
Vue.prototype.$axios = axios;

Vue.prototype.$axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
