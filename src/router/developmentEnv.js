const routes = [
  {
    path: '/developmentEnvList',
    name: 'developmentEnvList',
    component: () => import(/* webpackChunkName: "deploymentOnlineList" */  '@/views/developmentEnv/developmentEnv/DevelopmentEnvList.vue'),
    meta: {
      menuItem: 'developmentEnv',
      subMenu: 'developmentEnv',
    }
  },
  {
    path: '/developmentEnvForm',
    name: 'developmentEnvForm',
    component: () => import(/* webpackChunkName: "developmentEnvForm" */  '@/views/developmentEnv/developmentEnv/DevelopmentEnvForm.vue'),
    meta: {
      menuItem: 'developmentEnv',
      subMenu: 'developmentEnv',
    }
  }
];
export default routes;