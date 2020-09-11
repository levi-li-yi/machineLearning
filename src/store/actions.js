const actions = {
  SetDict: ({commit}, value) => {
    commit('SetDict', value)
  },
  SetJupyterList: ({commit}, value) => {
    commit('SetJupyterList', value)
  }
};
export default actions;