<template>
  <div class="chat-show">
    <div v-for='item in chatContentList' :key='item' class='content-li'>
      <a class="button button-small">{{item.time}}</a> <a v-bind:class="btnStyle()">{{item.username}}</a> -: {{item.content}}
    </div>

  </div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'

export default {
  name: 'chat-show',
  mounted(){
    //获取聊天记录
    const vm=this,
      axios = window.axios;
    axios.get('chatrecord')
    .then(response=>{
      let chatrecord = response.data;
      console.log(chatrecord);
      if(chatrecord.length){
        for(let item of chatrecord){
          vm.appendChatContentLi(JSON.parse(item));
        }
      }
    })
    .catch(error=>{
      console.log(error);
    })
  },
  data(){
    return{

    }
  },
  computed:{
    ...mapState([
        'chatContentList'
      ])
  },
  methods:{
    ...mapMutations([
        'appendChatContentLi'
      ]),
    btnStyle(){
      let S = {
        button:true,
        'button-small':true,
      };

      let colorlist = ['button-primary','button-action','button-highlight','button-caution','button-royal'];

      let ranColor = colorlist[parseInt(Math.random()*colorlist.length)];
      S[ranColor] = true;
      return S;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .chat-show{
    overflow-y:scroll;
    margin-bottom:10px;
    box-shadow:0 0 5px #999;
    width:100%;
    height:440px;
  }
  .content-li{
    text-align: left;
    box-shadow:0 0 5px #999;
    padding:2px 0;
    height:auto;
    width:98%;
    margin:5px 1%;
  }
</style>
