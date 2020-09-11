const mutations = {
  SetDict: (state, value) => {
    state.dictAll = value;
  },
  SetJupyterList: (state, value) =>{
    state.jupyterList = value;
  }
};
export default mutations;