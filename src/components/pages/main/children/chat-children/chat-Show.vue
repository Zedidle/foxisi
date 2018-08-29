<template>
  <div class="chat-show">
    <div v-for='item in chatContentList' :key='item' class='content-li'>
      {{item.time}}| {{item.username}}：{{item.content}}
    </div>

  </div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'


export default {
  name: 'chat-show',
  mounted(){
    this.appendChatContentLi({
      username:'zfcc',
      content:'23333',
      time:new Date()
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
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .chat-show{
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
