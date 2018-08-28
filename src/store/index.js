import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
  	isLogin: false,
  },
  mutations: {
    toLogin (state) {
      	state.isLogin = true;
    },
    toLogout(state){
    	state.isLogin = false;
    }
  }
})
