import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'  //首页
import login from '@/components/routePage/login'//登录页面
import consumer from '@/components/consumer' //消费币页面
import myhome from '@/components/myHome'//我的页面
import Record from '@/components/Record'//交易记录

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
    }
  ]
})
