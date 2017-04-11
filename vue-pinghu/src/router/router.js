import Vue from 'vue'
import VueRouter from 'vue-router'
import firstPage from '../views/firstPage/firstPage.vue'
import ZASDPage from '../views/ZASD/ZASD.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes:[
		{
			path:'/',
			name:'first',
			component:firstPage
		},
		{
			path:'/ZASD',
			name:'ZASD',
			component:ZASDPage
		}
	]
})