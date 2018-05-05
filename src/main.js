import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import './common/scss/index.scss'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$http = axios

const store = new Vuex.Store({
  state: {
    type: 2,
    onlyContent: true
  }
})

router.push('/goods')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
