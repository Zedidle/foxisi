<template>
  <div class="userinfo">
      <a 
        @click="toggleUserlist"
        style='margin-right:20px;width:auto'
        class="button button-primary button-rounded button-small"
      >{{userlistTip}}</a>
      <a class="button button-small button-royal">{{username}}</a> | <a @click='logout' class="button button-caution button-pill button-small">登出</a>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
  name: 'userinfo',
  mounted(){
    this.userlistTip = this.getUserlistTip(true);
  }, 
  data(){
    return{
      username:localStorage.getItem('username'),
      userlistTip:null,
      isMoving:false,
    };
  },
  computed:{

  },
  methods:{
    ...mapMutations([
        'toLogout'
      ]),
    getUserlistTip:function(on){
      let userlistTips = {
        onTips:['貌似在线','等人进来','愿者上钩',"哎哟不错","等待戈多"],
        offTips:['花里胡哨','bug列表','HelloWorld','肆肥宅']
      };
      if(on){
        return userlistTips.onTips[Math.floor(Math.random()*userlistTips.onTips.length)];
      }else{
        return userlistTips.offTips[Math.floor(Math.random()*userlistTips.offTips.length)];
      }
    },
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
    },
    toggleUserlist:function(){
      if(this.isMoving) return;
      this.isMoving = true;
      window.mechanismSound.play();
      let userlist = document.querySelector('.userlist'),
          w = userlist.off?0:240,
          k = 1;

      let interval = setInterval(function(){
        if(w>240 || w<0){
          clearInterval(interval);
          this.isMoving = false;
          this.userlistTip = this.getUserlistTip(userlist.off);
          w = userlist.off?240:0;
          userlist.off = !userlist.off;
        }
        userlist.style.width = w + 'px';
        w = w + (userlist.off?2:-2);
        k++;
      }.bind(this),2000/(25+k));
    }
  }
}
</script>

<style  lang="less" scoped>
  .userinfo{
    margin:5px;
  }

</style>
