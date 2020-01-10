import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index' // 首页
import login from '@/components/routePage/login'// 登录页面
import consumer from '@/components/consumer' // 消费币页面
import myhome from '@/components/myHome'// 我的页面
import Record from '@/components/Record'// 交易记录

import Embody from '@/components/embody'// 提现
import Commodity from '@/components/commodity'// 商品列表
import Conversion from '@/components/conversion' // 兑换
import Register from '@/components/routePage/register' // 注册
import BankCard from '@/components/BankCard' // 银行卡
import AddBank from '@/components/addBank' // 添加银行卡
import Approve from '@/components/approve' // 实名认证
import ShareCode from '@/components/shareCode' // 二维码海报
import allorder from '@/components/allorder' // 我的订单
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/consumer',
      name: 'consumer',
      component: consumer
    },
    {
      path: '/myhome',
      name: 'myhome',
      component: myhome
    },
    {
      path: '/Record',
      name: 'Record',
      component: Record
    },
    {
      path: '/Embody',
      name: 'Embody',
      component: Embody
    },
    {
      path: '/Commodity',
      name: 'Commodity',
      component: Commodity
    },
    {
      path: '/Conversion',
      name: 'Conversion',
      component: Conversion
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/BankCard',
      name: 'BankCard',
      component: BankCard
    },
    {
      path: '/AddBank',
      name: 'AddBank',
      component: AddBank
    },
    {
      path: '/Approve',
      name: 'Approve',
      component: Approve
    },
    {
      path: '/ShareCode',
      name: 'ShareCode',
      component: ShareCode
    },
    {
      path: '/allorder',
      name: 'allorder',
      component: allorder
    }
  ]
})
