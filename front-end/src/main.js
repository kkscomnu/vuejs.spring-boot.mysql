import Vue from 'vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuelidate)

axios.defaults.baseURL = '/api'
axios.defaults.headers.common.Accept = 'applicaiton/json'
axios.interceptors.response.use(
  response => response,
  (error) => {
    return Promise.reject(error)
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
