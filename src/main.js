import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem, Swipe, SwipeItem, Toast, Tab, Tabs, List, NavBar } from 'vant'

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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
