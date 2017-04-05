import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../component/Hello.vue'
import firstPage from '../pages/firstPage.vue'
import secondPage from '../pages/secondPage.vue'
import thirdPage from '../pages/thirdPage.vue'
import PostOne from '../pages/PostOne.vue'
import PostTwo from '../pages/PostTwo.vue'
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
      component:firstPage,
      children:[
        {
          path:'post1',
          component:PostOne
        },
        {
          path:'post2',
          component:PostTwo
        }
      ]
    },
    {
      path:'/second',
      name:'second',
      component:secondPage
    },
    {
      path:'/third',
      name:'third',
      component:thirdPage
    }
  ]
})
