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
    this.getUserlist();
    setInterval(this.getUserlist,5000);
  }, 
  data(){
    return{
      userlist:[]
    }
  },
  computed:{

  },
  methods:{
    getUserlist:function(){
      let vm = this,
          axios = window.axios;
      axios.get('/userlist')
      .then(response=>{
        console.log(response)
        vm.userlist = response.data;
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>

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
        height:auto;
        padding:0;
        margin:8px 5px;
      }
    }
  }

</style>
