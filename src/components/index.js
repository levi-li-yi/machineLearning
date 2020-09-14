import PageCompose from './pageCompose/PageCompose';
import SearchComps from './searchComps/Index';
import CommonColumn from './tableComps/CommonColumn';
import CommonPagination from './tableComps/CommonPagination';
import FormBottomBtn from './formComps/FormBottomBtn';
import FormLine from './formComps/FormLine';
import FormHeaderNav from './formComps/FormHeaderNav';
import PageHeaderNav from './common/PageHeaderNav';

const components = {
  install: (Vue) => {
    Vue.component('PageCompose', PageCompose);
    Vue.component('CommonColumn', CommonColumn);
    Vue.component('CommonPagination', CommonPagination);
    Vue.component('SearchComps', SearchComps);
    Vue.component('FormBottomBtn', FormBottomBtn);
    Vue.component('FormLine', FormLine);
    Vue.component('FormHeaderNav', FormHeaderNav);
    Vue.component('PageHeaderNav', PageHeaderNav);
  }
};

export default components;