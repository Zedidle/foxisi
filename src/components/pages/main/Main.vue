<template>
  <div class="main">
    <welcome msg="Welcome to Foxisi-ChatRoom"/>
    <userinfo></userinfo>
    <div class='content'>
      <userlist></userlist>
      <chat></chat>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

import Welcome from './children/Welcome.vue';
import Userlist from './children/Userlist.vue';
import Chat from './children/Chat.vue';
import Userinfo from './children/Userinfo.vue';

export default {
  components:{
    Welcome,
    Userlist,
    Chat,
    Userinfo
  },
  mounted(){
    let vm = this;
    let username = localStorage.getItem('username');
    if(!username){
      vm.toLogout();
    }else{
      console.log('getTOken')
      axios.get("/getToken",{
        params: {
          username
        }
      })
      .then(response=>{

        console.log(response);
        let token = response.data;
        localStorage.setItem('token',token);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },
  data(){
    return{

    }
  },
  computed:{

  },
  methods:{
    ...mapMutations([
        'toLogout'
      ])
  }

}
</script>


<style scoped>
.content{
  padding:5px;
  width:900px;
  height:560px;
  margin:0 auto;
  box-shadow: 0 0 5px #999;
}
</style>






