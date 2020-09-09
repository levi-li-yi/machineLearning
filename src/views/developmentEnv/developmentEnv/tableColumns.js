const tableColumns = [
  {
    prop: 'money',
    label: '名称',
    colConfig: { minWidth: 130, align: 'right', headerAlign: 'left', formatter: '$commonAmountFormat' }
  },
  {
    prop: 'dataStatusName',
    label: '状态',
    labelClassName: 'dataStatus',
    colConfig: { minWidth: 120, align: 'left' }
  },
];
export default tableColumns;