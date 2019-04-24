import axios from 'axios'
import { Toast } from 'vant'

const state = {
  yingyuanList: [],
  fenleiList: []
}

const mutations = {
  setYingyuanList(state, list) {
    state.yingyuanList = list
  },

  setFenleiList(state, list) {
    state.fenleiList = list
  }
}

const actions = {
  getYingyuanList({ commit }) {
    // Toast.loading({
    //   loadingType: 'spinner',
    //   duration: 0
    // }),
      axios.get('/maoyan/ajax/cinemaList?day=2019-04-23&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1555990820729&cityId=10').then(res => {
        let result = res.data
        if (res.status === 200) {
          // console.log(result.cinemas)
          commit('setYingyuanList', result.cinemas)
        } else {
          Toast(result.msg)
        }

        Toast.clear()
      })
  },

  getFenleiList({ commit }) {
    Toast.loading({
      loadingType: 'spinner',
      duration: 0
    }),
      axios.get('/maoyan/ajax/filterCinemas?ci=30').then(res => {
        let result = res.data
        if (res.status === 200) {
          commit('setFenleiList', result)
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