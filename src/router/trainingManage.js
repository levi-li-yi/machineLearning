const routes = [
  {
    path: '/trainingManageList',
    name: 'trainingManageList',
    component: () => import(/* webpackChunkName: "trainingManageList" */ '@/views/trainingManage/trainingManage/TrainingManageList.vue'),
  }
];

export default routes;