<template>
  <div id="app">
    <welcome msg="Welcome to Foxisi-ChatRoom"/>
    <div class='content'>
      <userlist></userlist>
      <chat></chat>
    </div>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue';
import Userlist from './components/Userlist.vue';
import Chat from './components/Chat.vue';

export default {
  name: 'app',
  mounted(){
    axios.get('/userlist')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
  },
  components: {
    Welcome,
    Userlist,
    Chat
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
.content{
  padding:5px;
  width:900px;
  height:560px;
  margin:0 auto;
  box-shadow: 0 0 5px #999;
}
</style>
