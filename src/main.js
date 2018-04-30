import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './common/scss/index.scss'

Vue.config.productionTip = false
Vue.prototype.$http = axios

router.push('/goods')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
