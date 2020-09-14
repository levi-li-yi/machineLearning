const tableColumns = [
  {
    type: 'expand',
    expandType: 'form',
    noSearch: true,
    expandColumns: [
      {label: 'ID:', props: 'id'},
      {label: '名称:', props: 'name'},
      {label: '标注类型:', props: 'category'},
      {label: '创建时间:', props: 'createDate'},
      {label: '描述:', props: 'description'},
      {label: '版本名称:', props: 'currentVersionId'},
    ]
  },
  {
    prop: 'name',
    label: '名称',
    colConfig: { minWidth: 130, align: 'left', sortable: false, className: 'jump_item'}
  },
  {
    prop: 'category',
    label: '标注类型',
    colConfig: { minWidth: 120, align: 'left', sortable: false, comp: 'MLDatasetCategory'}
  },
  {
    prop: 'createDate',
    label: '创建时间',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
];
export default tableColumns;