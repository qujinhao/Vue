//路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../view/About'
import Home from '../view/Home'
import News from '../view/News'
import Message from '../view/Message'
import MessageDetail from '../view/MessageDetail'

Vue.use(VueRouter)
//产生路由器对象
export default new VueRouter({
//  n个路由
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          // path:'/news',  //path最左侧的/永远代表根路由，不对
          path:'/home/news',
          component:News
        },
        {
          path:'message',   //简化写法
          component:Message,
          children:[
            {
              path:'/home/message/detail/:id',
              component:MessageDetail
            }
          ]
        },
        {
          path:'/',
          redirect:'/home/news'
        }
      ]
    },
    //设置默认路由
    {
      path:'/',
      //重定向路由
      redirect:'/about'
    }
  ]
})
