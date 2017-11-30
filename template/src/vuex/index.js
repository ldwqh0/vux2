import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {title: 'app'},
  mutations: {
    updateTitle (state, {title = 'no title'}) {
      state.title = title
    }
  }
})
