/* global Vue */
import Vuex from 'vuex'
import * as actions from '@/store/actions'
import * as mutations from '@/store/mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  actions,
  mutations
})

export default store