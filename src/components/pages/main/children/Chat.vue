<template>
  <div class="chat">
    <chat-show></chat-show>
    <chat-input></chat-input>
    <chat-code></chat-code>
  </div>
</template>

<script>
import ChatShow from "./chat-children/chat-Show.vue";
import ChatInput from "./chat-children/chat-Input.vue";
import ChatCode from "./chat-children/chat-Code.vue";

export default {
  name: 'chat',
  components:{
    ChatShow,
    ChatInput,
    ChatCode
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .chat{
    padding:5px;
    float: right; 
    box-shadow:0 0 5px #999;
    height:550px;
    width:630px;
    @media (max-width:960px){
      padding:0px;
      height:83%;
      width:100%;
    }
  }
</style>
