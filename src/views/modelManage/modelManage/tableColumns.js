const tableColumns = [
  {
    type: 'expand',
    expandType: 'table',
    noSearch: true,
    expandColumns: [
      {
        prop: 'version',
        label: '版本',
        colConfig: { minWidth: 120, align: 'left', sortable: false}
      },
      {
        prop: 'status',
        label: '状态',
        colConfig: { minWidth: 120, align: 'left', sortable: false, comp: 'MLModelStatus'}
      },
      {
        prop: 'size',
        label: '模型大小',
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
    ]
  },
  {
    prop: 'name',
    label: '名称',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
  {
    prop: 'latestVersion',
    label: '最新版本',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
  {
    prop: 'versionCount',
    label: '版本数量',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
  {
    prop: 'deployCategory',
    label: '部署类型',
    colConfig: { minWidth: 120, align: 'left', sortable: false, comp: 'MLModelDeployCategory'}
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