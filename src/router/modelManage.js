const routes = [
  {
    path: '/modelManageList',
    name: 'modelManageList',
    component: () => import(/* webpackChunkName: "modelManageList" */ '@/views/modelManage/modelManage/ModelManageList.vue'),
  }
];

export default routes;