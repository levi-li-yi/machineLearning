const routes = [
  {
    path: '/overview',
    name: 'overview',
    component: () => import(/* webpackChunkName: "overview" */ '@/views/overview/Overview.vue'),
  }
];

export default routes;