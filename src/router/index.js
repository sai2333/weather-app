import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/index'
import Content from '@/page/content'
import Lifecontent from '@/page/lifecontent'
import Search from '@/page/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path: '/content',
    	name: 'Content',
      component: Content,
    },
    {
      path: '/lifecontent/:id',
      name: 'Lifecontent',
      component: Lifecontent
    },
    {
      path: '/formsearch',
      name: 'Formsearch',
      component: Search
    }
  ]
})
