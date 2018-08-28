<template>
  <div class="userlist">
    <ul>
        <li :key='item' v-for='item in userlist'>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'userlist',
  mounted(){
    console.log('USERLIST');
  }, 
  data(){
    return{
      // userlist:[1,2,3,4,5]
    }
  },
  computed:{
    userlist(){
      let u = [];
      for(let i=0;i<20;i++){
        u.push(i);
      }
      return u;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
  .userlist{
    float: left;
    box-shadow: 0 0 5px #999;
    height:550px;
    padding:0 5px 0 0;
    width:240px;
    overflow: hidden;
    ul{
      overflow-y:scroll;
      transform: translateX(10px);
      padding:0;
      margin:0;
      height:540px;
      li{
        box-shadow:0 0 3px #999;
        list-style:none;
        height:44px;
        padding:0;
        margin:8px 5px;
      }
    }
  }

</style>
