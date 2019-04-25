import axios from 'axios'
import { Toast } from 'vant'

const state = {
  cityList: [],
  curCity: '吉安'
}

const getters = {
  newCityList (state) {
    let index = 0
    let flag = {}
    let result = []
    let list = state.cityList

    list.forEach(item => {
       let py = item.pinyin.substr(0, 1).toUpperCase()

       if (flag[py]) {
          result[flag[py] - 1].citys.push(item)
       } else {
         flag[py] = ++index
         let obj = {
           name: py,
           citys: [item]
         }
         result.push(obj)
       }
    })
    result.sort((a, b) => {
      return a.name.charCodeAt() - b.name.charCodeAt()
    })

    return result
  },

  pys (state, getters) {
    return getters.newCityList.map(item => {
      return item.name
    })
  }
}

const mutations = {
  setCityList(state, list) {
    state.cityList = list
  },

  chgCurCity (state, city) {
    state.curCity = city
  }
}

const actions = {
  getCityList({ commit }) {
    Toast.loading({
      loadingType: 'spinner',
      duration: 0
    }),
      axios.get('https://m.maizuo.com/gateway?k=5482414', {
        headers: {
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1555315268932007903628"}',
          "X-Host" : "mall.film-ticket.city.list"
        }
      }).then(res => {
        console.log(res);
        let result = res.data
        if (result.status === 0) {
          console.log(result.data.cities)
          commit('setCityList', result.data.cities)
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
  actions,
  getters
}