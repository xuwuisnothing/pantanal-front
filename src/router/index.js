import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AvgSeries from '@/components/AvgSeries'


Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'AvgSeries',
      component : AvgSeries
    }
  ]
})
