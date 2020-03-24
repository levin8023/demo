import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { getRequest, postRequest } from './utils/api.js'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest = postRequest

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
