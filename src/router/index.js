import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/domains',
    name: 'Domains',
    component: () => import(/* webpackChunkName: "about" */ '../views/Domains.vue')
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Alerts.vue')
  },
  {
    path: '/technologies',
    name: 'Technologies',
    component: () => import(/* webpackChunkName: "about" */ '../views/Technologies.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
