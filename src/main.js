import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './rem'
import vuetify from './plugins/vuetify'
import './plugins'
import './permission.js'
import SocketIO from "socket.io-client"

import VueSocketIO from 'vue-socket.io'
import 'font-awesome/css/font-awesome.min.css'
import VueAnimateOnScroll from './plugins/scroll.js';
Vue.use(VueAnimateOnScroll)

Vue.config.productionTip = false
let socketurl = process.env.NODE_ENV === 'production' ? '//online.ivyelite.net' : 'http://localhost:3000'

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO(socketurl)
}))

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
