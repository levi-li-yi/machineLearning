const tableColumns = [
  {
    prop: 'name',
    label: '名称',
    colConfig: { minWidth: 130, align: 'left', sortable: false}
  },
  {
    prop: 'status',
    label: '状态',
    colConfig: { minWidth: 120, align: 'left', sortable: false, comp: 'MLAlgorithmStatus'}
  },
  {
    prop: 'version',
    label: '版本',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
  {
    prop: 'size',
    label: '大小',
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