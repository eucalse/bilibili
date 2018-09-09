// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import api from './api/api'
import iview from 'iview'
import store from './store/index'
import VueResource from 'vue-resource'
import 'iview/dist/styles/iview.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'

Vue.prototype.$axios = axios
Vue.prototype.$api = api
Vue.use(iview)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
