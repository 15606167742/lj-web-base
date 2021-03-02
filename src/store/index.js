import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'

Vue.use(Vuex)

const state = {
	token: null
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
