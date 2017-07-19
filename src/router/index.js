import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import sg from '@/components/test/sg'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sg',
      name: 'sg',
      component: sg
    }
  ]
})
