import axios from 'axios'
import { Toast } from 'vant'

const state = {
  photoList: [],
  yanyuan: []
}

const mutations = {
  setPhotoList(state, list) {
    state.photoList = list
  },
  
  setYanyuan(state, list) {
    state.yanyuan = list
  }
}

const actions = {
  getPhotoList({ commit}) {
    // Toast.loading({
    //   loadingType: 'spinner',
    //   duration: 0
    // }),
    axios.get('https://m.maizuo.com/gateway?filmId=4588&k=1912601', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1555315268932007903628"}',
        'X-Host': 'mall.film-ticket.film.info'
      }

    }).then(res => {
      let result = res.data
      if (res.status === 200) {
        commit('setPhotoList', result.data.film.photos)
      } else {
        Toast(result.msg)
      }
    })
  },

  getYanyuan({ commit}) {
    axios.get('https://m.maizuo.com/gateway?filmId=4588&k=1912601', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1555315268932007903628"}',
        'X-Host': 'mall.film-ticket.film.info'
      }

    }).then(res => {
      let result = res.data
      if (res.status === 200) {
        commit('setYanyuan', result.data.film.actors)
      } else {
        Toast(result.msg)
      }
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}