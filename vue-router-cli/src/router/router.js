import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../component/Hello.vue'
import firstPage from '../pages/firstPage.vue'
import secondPage from '../pages/secondPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      name:'Hello',
      component:Hello
    },
    {
      path:'/first',
      name:'first',
      component:firstPage
    },
    {
      path:'/second',
      name:'second',
      component:secondPage
    }
  ]
})
