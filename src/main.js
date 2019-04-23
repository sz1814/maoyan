import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Swipe, SwipeItem, Toast, Tab, Tabs, List, NavBar, Search, Icon, TreeSelect } from 'vant'

Vue.config.productionTip = false

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Toast)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(NavBar)
  .use(Search)
  .use(Icon)
  .use(TreeSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
