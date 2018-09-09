<template>
  <div v-show='isShowCode' class='code'>
    <div class='top'>
      <button 
        @click='offShowCode'
        style='float:left'
        class="button button-circle button-small"
      ><i class="fa fa-close"></i>
      </button>
      <a class="button button-small">代码</a>
      <button 
        @click='sendCode'
        style='float:right'
        class="button button-circle button-small"
      ><i class="fa fa-send-o"></i>
      </button>
    </div>
    <div id="my-code"></div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
import CodeFlask from "codeflask";

export default {
  mounted(){
    this.flask = new CodeFlask('#my-code', {
      language:['clike','javascript'],
      lineNumbers:true,
    });

    // 后加载样式
    let f = document.querySelector('#my-code .codeflask');
    f.style.width = '500px';
    f.style.height = '550px';
    f.querySelector('pre').style.width = 'auto';
  },
  components:{

  },
  data(){
    return{
      flask:null,
      canSend:true,
    }
  },
  computed:{
    ...mapState([
      'isShowCode'
      ])
  },
  methods:{
    ...mapMutations([
      'offShowCode'
      ]),

    sendCode:function(){

      if(!this.canSend) return;

      let code = this.flask.getCode(),
          l = code.trim().length;

      if(!l || l>500) return;

      const vm = this,
        socket = window.socket;

      socket.emit('chat message',JSON.stringify({
        isCode:true,
        username:localStorage.getItem('username'),
        content:code,
        time:new Date()
      }));

      vm.canSend = false;
      setTimeout(function(){
        vm.canSend = true;
      },3000);
      this.offShowCode();
    }
  },

}
</script>

<style lang="less" scoped>
  .top{
    background-color:#444;
    height:30px;
  }
  .code{
    opacity: 0.95;
    border:2px solid #bbb;
    width:500px;
    height:580px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
  }
</style>
