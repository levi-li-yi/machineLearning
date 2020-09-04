import Vue from 'vue';
import Router from  'vue-router';

import algorithmManage from './algorithmManage';
import dataManage from './dataManage';
import deploymentOnline from './deploymentOnline';
import developmentEnv from './developmentEnv';
import modelManage from './modelManage';
import overview from './overview';
import trainingManage from './trainingManage';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/overview',
      component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/Index.vue'),
      children: [
        ...algorithmManage,
        ...dataManage,
        ...deploymentOnline,
        ...developmentEnv,
        ...modelManage,
        ...trainingManage,
        ...overview,
      ]
    }
  ]
});

export default router;