const routes = [
  {
    path: '/algorithmManageList',
    name: 'algorithmManageList',
    component: () => import(/* webpackChunkName: "algorithmManageList" */ '@/views/algorithmManage/algorithmManage/AlgorithmManageList.vue'),
    meta: {
      menuItem: 'algorithmManage',
      subMenu: 'algorithmManage',
    }
  },
  {
    path: '/algorithmManageForm',
    name: 'algorithmManageForm',
    component: () => import(/* webpackChunkName: "algorithmManageForm" */ '@/views/algorithmManage/algorithmManage/AlgorithmManageForm.vue'),
    meta: {
      menuItem: 'algorithmManage',
      subMenu: 'algorithmManage',
    }
  }
];

export default routes;