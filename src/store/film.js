import axios from 'axios'
import { Toast } from 'vant'

const state = {
  filmList: []
}

const mutations = {
  setFilmList(state, list) {
    state.filmList = list
    state.filmList.forEach(x => {
     x.img = x.img.replace('/w.h','')
    })
  }
}

const actions = {
  getFilmList({ commit }) {
    Toast.loading({
      loadingType: 'spinner',
      duration: 0
    }),
      axios.get('/maoyan/ajax/movieOnInfoList?token=').then(res => {
        console.log(res)
        let result = res.data
        if (res.status === 200) {
          console.log(result.movieList)
          commit('setFilmList', result.movieList)
        } else {
          Toast(result.msg)
        }

        Toast.clear()
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}