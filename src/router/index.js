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
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/',
    //   name: 'ordermanage',
    //   component: ordermanage
    // },
    {
      path: '/',
      name: 'goodlist',
      component: goodlist
    },
    // {
    //   path: '/',
    //   name: 'ordersta',
    //   component: ordersta
    // },
    // {
    //   path: '/',
    //   name: 'shopmanage',
    //   component: shopmanage
    // },
    // {
    //   path: '/',
    //   name: 'gooddetail',
    //   component: gooddetail
    // }
  ]
})
