const routes = [
  {
    path: '/modelManageList',
    name: 'modelManageList',
    component: () => import(/* webpackChunkName: "modelManageList" */ '@/views/modelManage/modelManage/ModelManageList.vue'),
    meta: {
      menuItem: 'modelManage',
      subMenu: 'modelManage',
    }
  },
  {
    path: '/modelManageForm',
    name: 'modelManageForm',
    component: () => import(/* webpackChunkName: "modelManageForm" */ '@/views/modelManage/modelManage/ModelManageForm.vue'),
    meta: {
      menuItem: 'modelManage',
      subMenu: 'modelManage',
    }
  }
];

export default routes;