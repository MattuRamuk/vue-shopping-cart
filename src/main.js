import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { routes } from './routes'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import vuetify from './plugins/vuetify'
import store from './store/store'

Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new VueRouter({
  mode : 'history',
  routes
})

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')
