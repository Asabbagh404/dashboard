import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      noRequiredAuth: true,
      layout: 'NoLayout'
    }
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "about" */ '../views/Error.vue'),
    meta: {
      noRequiredAuth: true,
      layout: 'NoLayout'
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.noRequiredAuth && store.state.isAdmin === false) {
    next('/login')
  }
  else {
    next()
  }
})

export default router
