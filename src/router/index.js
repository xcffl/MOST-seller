import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ordermanage from '@/components/order_manage'
import ordersta from '@/components/order_sta'
import shopmanage from '@/components/shop_manage'
import gooddetail from '@/components/good_detail'
import goodlist from '@/components/good_list'

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
      path: '/shopmanage',
      name: 'shopmanage',
      component: shopmanage
    },
    {
      path: '/gooddetail',
      name: 'gooddetail',
      component: gooddetail
    }
  ]
})
