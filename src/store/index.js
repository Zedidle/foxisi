import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import chat from './messages/chat.js';

export default new Vuex.Store({
  state: Object.assign({
    isLogin: false,
  },chat.state),
  mutations: Object.assign({
    toLogin (state) {
      state.isLogin = true;

      const socket = window.socket;
      // 心跳
      setInterval(function(){
        socket.emit('heartbeat',localStorage.getItem('username'));
      },5000);

    },
    toLogout(state){
      state.isLogin = false;
    }
  },chat.mutations)
})
