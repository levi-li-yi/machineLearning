const routes = [
  {
    path: '/developmentEnvList',
    name: 'developmentEnvList',
    component: () => import(/* webpackChunkName: "deploymentOnlineList" */ '@/views/developmentEnv/developmentEnv/DevelopmentEnvList.vue'),
  }
];

export default routes;