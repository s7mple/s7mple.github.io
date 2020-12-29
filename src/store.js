import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goods:[]
  },
  mutations: {
    initdata(state,arr) {
        state.goods=arr;
    },
  }
})
export default store;