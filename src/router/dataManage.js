const routes = [
  {
    path: '/dataManageList',
    name: 'dataManageList',
    component: () => import(/* webpackChunkName: "dataManageList" */ '@/views/dataManage/dataManage/DataManageList.vue'),
    meta: {
      menuItem: 'dataManage',
      subMenu: 'dataManage',
    }
  },
  {
    path: '/dataManageForm',
    name: 'dataManageForm',
    component: () => import(/* webpackChunkName: "dataManageForm" */ '@/views/dataManage/dataManage/DataManageForm.vue'),
    meta: {
      menuItem: 'dataManage',
      subMenu: 'dataManage',
    }
  },
  {
    path: '/dataManageDetail',
    name: 'dataManageDetail',
    component: () => import(/* webpackChunkName: "dataManageDetail" */ '@/views/dataManage/dataManage/DataManageDetail.vue'),
    meta: {
      menuItem: 'dataManage',
      subMenu: 'dataManage',
    }
  },
  {
    path: '/dataManageTag',
    name: 'dataManageTag',
    component: () => import(/* webpackChunkName: "dataManageTag" */ '@/views/dataManage/dataManage/DataManageTag.vue'),
    meta: {
      menuItem: 'dataManage',
      subMenu: 'dataManage',
    }
  }
];

export default routes;