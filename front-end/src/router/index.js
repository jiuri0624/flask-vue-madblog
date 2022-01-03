import Vue from 'vue'
import Router from 'vue-router'
import Ping from '@/components/ping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ping',
      component: Ping
    }
  ]
})