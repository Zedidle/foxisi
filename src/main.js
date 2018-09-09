import Vue from 'vue'
import App from './App.vue'

window.msgTipSound = new Audio('audio/msgTip.mp3');
window.mechanismSound = new Audio('audio/mechanism.mp3');

window.axios = require("axios")

Vue.config.productionTip = false

import store from './store';

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
