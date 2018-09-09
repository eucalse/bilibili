import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../api/api'
// import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    id: '0',
    name: '',
    scrollState: 0
  },
  getter: {
    // video: state => state.video
  },
  mutations: {
    passId: function (state, id) {
      state.id = id
    },
    passScroll: function (state, scrollTop) {
      state.scrollState = scrollTop
    }
  },
  actions: {
  }
})
export default store
