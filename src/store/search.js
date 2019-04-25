const state ={
  cinemaList: []
}

const mutations = {
  setcinemaList(state, list ) {
    state.cinemaList = list
    console.log(list)
  }

}
export default {
  namespaced: true,
  state,
  mutations
}
