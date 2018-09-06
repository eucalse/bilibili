import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../api/api'
// import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    id: '0',
    name: ''
  },
  getter: {
    // video: state => state.video
  },
  mutations: {
    passId: function (state, id) {
      state.id = id
    }
  },
  actions: {
  }
})
export default store
