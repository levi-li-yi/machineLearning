import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import states from './states';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  mutations,
  states
});

export default store;
