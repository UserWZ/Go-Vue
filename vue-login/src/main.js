import Vue from 'vue'
import App from './App.vue'
import middleBox from './component/middle.vue'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)
Vue.use(Vuelidate)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
new Vue({
  el: '#middleBox',
  render: h => h(middleBox)
})
