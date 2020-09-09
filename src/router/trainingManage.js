const routes = [
  {
    path: '/trainingManageList',
    name: 'trainingManageList',
    component: () => import(/* webpackChunkName: "trainingManageList" */ '@/views/trainingManage/trainingManage/TrainingManageList.vue'),
    meta: {
      keepLive: true,
      menuItem: 'trainingManage',
      subMenu: 'trainingManage',
    }
  },
  {
    path: '/trainingManageForm',
    name: 'trainingManageForm',
    component: () => import(/* webpackChunkName: "trainingManageForm" */ '@/views/trainingManage/trainingManage/TrainingManageForm.vue'),
    meta: {
      menuItem: 'trainingManage',
      subMenu: 'trainingManage',
    }
  }
];

export default routes;