const routes = [
  {
    path: '/deploymentOnlineList',
    name: 'deploymentOnlineList',
    component: () => import(/* webpackChunkName: "deploymentOnline" */ '@/views/deploymentOnline/deploymentOnline/DeploymentOnlineList.vue'),
  }
];

export default routes;