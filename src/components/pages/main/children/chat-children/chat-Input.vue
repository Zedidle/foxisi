<template>
  <div class="chat-input" @keyup.enter='send'>
	<textarea v-model='content' placeholder="---------------------------至少3个字，至多100字。---------------------------"></textarea>
	<button @click='send'>发送消息</button>
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
			if(l<4 || l>100) return;

			let vm = this,
				axios = window.axios;

			axios.post('/sendMessage',{
				username:localStorage.getItem('username'),
				content:vm.content,
				time:new Date()
			})
			.then(response=>{
				console.log(response);
				let contentLi = response.data;
				vm.appendChatContentLi(contentLi);
				vm.content = '';
			})
			.catch(error=>{
				console.log(error);
			})		
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
		width:98%;
		height:60px;
		resize:none;
		font-size:16px;
		overflow: hidden;
    }
    button{
		float: right;
    }
  }
</style>
