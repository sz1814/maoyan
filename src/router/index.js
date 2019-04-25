import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import Film from '../views/index/Film.vue'
import Cinema from '../views/index/Cinema.vue'
import Center from '../views/index/Center.vue'
import City from '../views/city/Index.vue'
import Search from '../views/search/Index.vue'
import Detail from '../views/detail/Index.vue'
import SearchList from '../views/search/searchList.vue'
import Login from '../views/login/Index.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        { path: 'films/:filmType', name: 'films', component: Film, meta: { tabName: 0 } },
        { path: 'cinemas', name: 'cinemas', component: Cinema, meta: { tabName: 1 } },
        { path: '', redirect: '/films/.n-hot' },
        { path: 'center', name: 'center', component: Center, meta: { tabName: 2 } }
      ]
    },
    { path: '/city', name: 'city', component: City },
    { path: '*', redirect: '/films/.n-hot' },
    { path: '/search', name: 'search', component: Search },
    { path: '/searchList', name: 'search', component: SearchList },
    { path: '/detail', name: 'detail', component: Detail },
    { path: '/login', name: 'login', component: Login }

  ]
})

export default router
