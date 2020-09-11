const tableColumns = [
  {
    type: 'expand',
    expandType: 'table',
    noSearch: true,
    expandColumns: [
      {label: '地址:', props: 'address'},
      {label: '种类:', props: 'category'},
    ]
  },
  {
    prop: 'name',
    label: '名称',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
  {
    prop: 'version',
    label: '最新版本',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
  {
    prop: 'versionCount',
    label: '版本数量',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
  {
    prop: 'name',
    label: '部署类型',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
  {
    prop: 'createDate',
    label: '创建时间',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
  {
    prop: 'description',
    label: '描述',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
];
export default tableColumns;