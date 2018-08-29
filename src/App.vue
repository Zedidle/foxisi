<template>
  <div id="app">
      <main2 v-if='isLogin'></main2>
      <login v-else></login>
      <socket-server></socket-server>
  </div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'
import Login from './components/pages/login/Login.vue';
import Main2 from './components/pages/main/Main.vue';
import SocketServer from './components/socketServer/SocketServer.vue';

export default {
  name: 'app',
  components:{
    Login,
    Main2,
    SocketServer
  },
  mounted(){
  },
  computed:{
    ...mapState([
      'isLogin'
    ])
  },
  methods:{
    ...mapMutations([

    ])
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  text-align: center;
}
</style>
