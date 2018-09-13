<template>
  <div class="userinfo">
      <a 
        @click="toggleUserlist"
        style='margin-right:20px;'
        class="button button-3d button-primary button-circle button-small"
      > <i class="fa fa-hand-o-down"></i></a>
      <a 
        style='margin-right:20px;'
        class="button button-3d button-small button-rounded  button-royal"
      ><i class="fa fa-user"></i> {{username}}</a>
      <a @click='logout' class="button button-3d button-caution button-pill button-small"><i class="fa fa-sign-out"></i> 离开</a>
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
        onTips:['在线'],
        offTips:['HelloWorld','肆肥宅']
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
      let userlist = document.querySelector('.userlist');
      let title = document.querySelector('.app-title');
      let s = userlist.style;
      if(s.opacity === '' || s.opacity == 1){
        s.opacity = 1;
        (function interval(){
          if(Number(s.opacity) > 0){
            s.opacity = Number(s.opacity) - 0.03;
            setTimeout(function(){
              interval();
            },30);
          }else{
            s.opacity = 0;
            s.display = 'none';
            title.style.display = 'none';
          }
        })();
      }else{
        s.display = 'block';
        title.style.display = 'block';
        (function interval(){
          if(Number(s.opacity) < 1){
            s.opacity = Number(s.opacity) + 0.03;
            setTimeout(function(){
              interval();
            },30);
          }else{
            s.opacity = 1;
          }
        })();
      }
    }
  }
}
</script>

<style  lang="less" scoped>
  .userinfo{
    margin-bottom:15px;
    @media (max-width:960px){
      // width:356px;
      width:100%;
    }
  }

</style>
