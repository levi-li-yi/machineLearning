import TableCompose from './tableCompose/TableCompose';

const components = {
  install: (Vue) => {
    Vue.component('TableCompose', TableCompose)
  }
};

export default components;