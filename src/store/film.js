import axios from 'axios'
import { Toast } from 'vant'

const state = {
  filmList: [],
  bannerList: []
}

const mutations = {
  setFilmList(state, list) {
    state.filmList = list
    state.filmList.forEach(x => {
     x.img = x.img.replace('/w.h','')
    })
  },

  setBannerList(state, list) {
    state.bannerlist = list
    console.log(list)
    state.bannerList.forEach(x => {
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
        let result = res.data
        if (res.status === 200) {
          commit('setFilmList', result.movieList)
        } else {
          Toast(result.msg)
        }

        Toast.clear()
      })
  },

  getBannerList({ commit }) {
    Toast.loading({
      loadingType: 'spinner',
      duration: 0
    }),
      axios.get('/maoyan/ajax/mostExpected?ci=10&limit=10&offset=0&token=').then(res => {
        let result = res.data
        if (res.status === 200) {
          commit('setBannerList', result.coming)
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