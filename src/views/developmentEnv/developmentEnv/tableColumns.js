const tableColumns = [
  {
    type: 'expand',
    expandType: 'form',
    noSearch: true,
    expandColumns: [
      {label: 'ID:', props: 'id'},
      {label: '名称:', props: 'name'},
      {label: '工作环境:', props: 'environment'},
      {label: '规格:', props: 'spec'},
      {label: '存储配置:', props: '123'},
      {label: '存储空间:', props: 'storagePath'},
      {label: '最后操作时间:', props: 'updateDate'},
    ]
  },
  {
    prop: 'name',
    label: '名称',
    colConfig: { minWidth: 130, align: 'left', headerAlign: 'left', sortable: false }
  },
  {
    prop: 'status',
    label: '状态',
    labelClassName: 'dataStatus',
    colConfig: { minWidth: 120, sortable: false, comp: 'MLNotebookStatus' }
  },
  {
    prop: 'environment',
    label: '创建环境',
    colConfig: { minWidth: 130, align: 'left', sortable: false }
  },
  {
    prop: 'spec',
    label: '规格',
    colConfig: { minWidth: 130, align: 'left', sortable: false }
  },
  {
    prop: 'createDate',
    label: '创建时间',
    colConfig: { minWidth: 130, align: 'left', sortable: false }
  },
  {
    prop: 'description',
    label: '描述',
    colConfig: { minWidth: 130, align: 'left', sortable: false }
  },
];
export default tableColumns;