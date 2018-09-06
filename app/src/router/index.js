import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home'
import tuijian from '../components/home/tuijian'
import zhibo from '../components/home/zhibo'
import zhuifan from '../components/home/zhuifan'
import homepage from '../components/homepage'
import content from '../components/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home,
          children: [
            {
              path: 'tuijian',
              component: tuijian
            },
            {
              path: 'zhuifan',
              component: zhuifan
            },
            {
              path: 'zhibo',
              component: zhibo
            }
          ]
        }
      ]
    },
    {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
})
