const routes = [
  {
    path: '/algorithmManageList',
    name: 'algorithmManageList',
    component: () => import(/* webpackChunkName: "algorithmManageList" */ '@/views/algorithmManage/algorithmManage/AlgorithmManageList.vue'),
  }
];

export default routes;