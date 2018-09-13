<template>
  <div class="main">
    <welcome msg="🔥火西聊天室🔥"/></welcome>
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
  background:rgba(255,255,255,.85);
  padding:0;
  /*width:900px;*/
  width:auto;
  display: inline-block;
  height:560px;
  margin:0 auto;
  box-shadow: 0 0 5px #999;
  @media (max-width: 960px){
    height: auto;
  }
}
</style>






