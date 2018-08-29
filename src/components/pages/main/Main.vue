<template>
  <div class="main">
    <welcome msg="火西平行世界肥宅宇宙聊天肆"/>
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
  padding:5px;
  width:900px;
  height:560px;
  margin:0 auto;
  box-shadow: 0 0 5px #999;
}
</style>






