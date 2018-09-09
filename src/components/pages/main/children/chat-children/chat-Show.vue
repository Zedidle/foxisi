<template>
  <div class="chat-show">
    <!-- <div v-for='item in chatContentList' :key='item' class='content-li'> -->
    <div v-for='item in chatWithCodeContentList' :key='item' class='content-li'>
      <a class="button button-small">{{item.time}}</a><a v-bind:class="btnStyle()">{{item.username}}</a> -:<a v-show='item.isCode' @click='toggleCode' class="button button-raised button-small">展开代码</a>
      <span v-if='item.isCode' v-html='item.content'></span>
      <span v-else>{{item.content}}</span>
    </div>
  </div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'
import CodeFlask from "codeflask";

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
    chatWithCodeContentList:function(){
      let list = this.chatContentList;
      for(let i of list){
        if(i.isCode){
          let node = document.createElement('div');
          let flask = new CodeFlask(node, {
            language:['clike','javascript'],
          });

          let f = node.querySelector('.codeflask');
          f.style.width = '600px';
          f.style.height = '40px';
          f.style.position = 'relative';
          f.style.overflowY = 'scroll';
          f.style.resize = 'vertical';
          f.style.opacity = 0.8;

          f.querySelector('pre').style.width = 'auto';
          flask.updateCode(i.content);
          i.content = node.innerHTML;
        }
      }

      return list;
    },
    ...mapState([
        'chatContentList'
      ])
  },
  methods:{
    ...mapMutations([
        'appendChatContentLi'
      ]),

    toggleCode(e){
      let parent = e.currentTarget.parentNode;
      let p = parent.querySelector('.codeflask > pre');
      parent.querySelector('.codeflask').style.height = (parent.onCode?40:p.offsetHeight) + 'px';
      parent.onCode = !parent.onCode;
      e.currentTarget.innerText = parent.onCode?"收起代码":"展开代码";
    },

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
