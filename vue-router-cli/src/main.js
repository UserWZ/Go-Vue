import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
