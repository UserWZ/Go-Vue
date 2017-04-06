import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../component/Hello.vue'
import firstPage from '../pages/firstPage/firstPage.vue'
import secondPage from '../pages/secondPage/secondPage.vue'
import thirdPage from '../pages/thirdPage/thirdPage.vue'
import PostOne from '../pages/firstPage/PostOne.vue'
import PostTwo from '../pages/firstPage/PostTwo.vue'
import PostThree from '../pages/firstPage/PostThree.vue'
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
        },
        {
          path:'post3',
          component:PostThree
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
