const routes = [
  {
    path: '/deploymentOnlineList',
    name: 'deploymentOnlineList',
    component: () => import(/* webpackChunkName: "deploymentOnline" */ '@/views/deploymentOnline/deploymentOnline/DeploymentOnlineList.vue'),
    meta: {
      menuItem: 'deploymentOnline',
      subMenu: 'deploymentOnline',
    }
  },
  {
    path: '/deploymentOnlineForm',
    name: 'deploymentOnlineForm',
    component: () => import(/* webpackChunkName: "deploymentOnlineForm" */ '@/views/deploymentOnline/deploymentOnline/DeploymentOnlineForm.vue'),
    meta: {
      menuItem: 'deploymentOnline',
      subMenu: 'deploymentOnline',
    }
  }
];

export default routes;