import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import Film from '../views/index/Film.vue'
import Cinema from '../views/index/Cinema.vue'
import Center from '../views/index/Center.vue'
import City from '../views/city/Index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        { path: 'films', name: 'films', component: Film, meta: { tabName: 0 } },
        { path: 'cinemas', name: 'cinemas', component: Cinema, meta: { tabName: 1 } },
        { path: 'center', name: 'center', component: Center, meta: { tabName: 2 } },
        { path: '', redirect: '/films' }
      ]
    },
    { path: '/city', name: 'city', component: City }
  ]
})

export default router
