<template>
  <div class="userinfo">
    
      <a class="button button-small button-royal">{{username}}</a> | <a @click='logout' class="button button-caution button-pill button-small">登出</a>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
  name: 'userinfo',
  mounted(){
    
  }, 
  data(){
    return{
      username:localStorage.getItem('username')
    }
  },
  computed:{

  },
  methods:{
    ...mapMutations([
        'toLogout'
      ]),
    logout:function(){
      let vm = this;
      axios.post('/logout',{
        username:vm.username
      })
      .then(response=>{
        vm.toLogout();
        localStorage.clear();
      })
      .catch(error=>{
        console.error(error);
      })
    }
  }
}
</script>

<style  lang="less" scoped>
  .userinfo{
    margin:5px;
  }

</style>
