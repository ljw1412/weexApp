/* global Vue */
import Router from 'vue-router'
import welcome from '@/views/welcome'
import page2 from '@/views/page2'

Vue.use(Router)

export default new Router({
  // mode: 'abstract',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/',
      name: 'page2',
      component: page2
    }
  ]
})