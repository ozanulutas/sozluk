import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: true,
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
