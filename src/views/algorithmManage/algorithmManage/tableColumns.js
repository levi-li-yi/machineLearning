const tableColumns = [
  {
    type: 'expand',
    noSearch: true,
    expandColumns: [
      {label: '地址:', props: 'address'},
      {label: '种类:', props: 'category'},
    ]
  },
  {
    prop: 'id',
    label: 'ID',
    colConfig: { minWidth: 130, align: 'left', sortable: false, className: 'jump_item'}
  },
  {
    prop: 'name',
    label: '名称',
    colConfig: { minWidth: 120, align: 'left', sortable: false}
  },
];
export default tableColumns;