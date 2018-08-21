import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ordermanage from '@/components/order_manage'
import ordersta from '@/components/order_sta'
import goodlist from '@/components/good_list'
import addgood from '@/components/add_good'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ordermanage',
      name: 'ordermanage',
      component: ordermanage
    },
    {
      path: '/goodlist',
      name: 'goodlist',
      component: goodlist
    },
    {
      path: '/ordersta',
      name: 'ordersta',
      component: ordersta
    },
    {
      path: '/addgood',
      name: 'addgood',
      component: addgood
    }
  ]
})
