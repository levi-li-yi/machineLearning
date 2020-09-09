const tableColumns = [
  {
    type: 'expand',
    noSearch: true,
    expandColumns: [
      {label: 'ID:', props: 'id'},
      {label: '名称:', props: 'name'},
      {label: '工作环境:', props: 'category'},
      {label: '规格:', props: 'createDate'},
      {label: '存储配置:', props: 'description'},
      {label: '存储空间:', props: 'currentVersionId'},
      {label: '最后操作时间:', props: 'updateDate'},
    ]
  },
  {
    prop: 'name',
    label: '名称',
    colConfig: { minWidth: 130, align: 'left', sortable: false}
  },
  {
    prop: 'status',
    label: '状态',
    colConfig: { minWidth: 120, align: 'left', sortable: false, comp: 'MLTraningStatus'}
  },
  {
    prop: 'createDate',
    label: '版本数量',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
  {
    prop: 'createDate',
    label: '运行时长',
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