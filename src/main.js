import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/tiptap'
import './plugins'
import './permission.js'
import SocketIO from "socket.io-client"

import VueSocketIO from 'vue-socket.io'

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
