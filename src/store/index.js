import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city: '成都'
  },
  actions: {
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
export default store
