<template>
  <div class="chat-input" @keyup.enter='send'>
	<textarea v-model='content' placeholder="—————————————至少3个字，至多100字。————————————"></textarea>
	<a @click='send' class="button button-primary button-small">发送</a>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

export default {
	name: 'chat-input',
	mounted(){

	},
	data(){
		return{
			content:'',
		}
	},
	computed:{
		...mapState([
		
		]),
	},
	methods:{
		...mapMutations([
			'appendChatContentLi'
		]),
		send(){
			let l = this.content.trim().length;
			if(l<3 || l>100) return;

			const vm = this,
				socket = window.socket;

			socket.emit('chat message',{
				username:localStorage.getItem('username'),
				content:vm.content,
				time:new Date()
			});

			vm.content = '';
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .chat-input{
    box-shadow:0 0 5px #999;
    height:100px;
    width:100%;
    textarea{
		font-family:'微软雅黑';
		width:98%;
		height:60px;
		resize:none;
		font-size:16px;
		overflow: hidden;
    }
	a{
		float: right;
	}
  }
</style>
