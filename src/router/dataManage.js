const routes = [
  {
    path: '/dataManageList',
    name: 'dataManageList',
    component: () => import(/* webpackChunkName: "dataManageList" */ '@/views/dataManage/dataManage/DataManageList.vue'),
  }
];

export default routes;