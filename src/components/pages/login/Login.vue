<template>
	<div class="login">
		<h2 style='text-align: center;'>欢迎肥宅归来~</h2>
		<h4 class='token-tip' v-show='tokentip'>{{tokentip}}</h4>
		<input id='username' name='username' placeholder="请输入您的用户名">
		<button id='login-btn' @click='login'>LOGIN</button>
	</div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'

export default {
  name: 'welcome',
  mounted(){
		if(localStorage.getItem('token')){
			this.toLogin();
		}
  },
  props: {
  },
  data(){
	return {
		tokentip:'',
  	};
  },
  computed:{
  	...mapState([
    	
    	]),

  },
  methods:{
  	...mapMutations([
    	'toLogin'
    	]),
  	login:function(){
		let vm = this;

  		function getId(id){ return document.getElementById(id); }

		let username = getId('username').value.trim();
		if(!username) return;

		localStorage.setItem('username',username);


		axios.post('/login',{
			username
		}).then(response=>{
			console.log(response);
			let token = response.data;
			if(token){
				localStorage.setItem('token',token);
				vm.toLogin();
			}else{
				vm.tokenTip();
			}
		}).catch(error=>{
			console.error(error);
		})

	},

	tokenTip:function(){
  		let vm = this;
		vm.tokentip = '该用户名已被使用，或者您丢失了口令。';
		setTimeout(function(){
			vm.tokentip = '';
		},3000);
	}
  }
  
}
</script>

<style scoped>
	#username{
		text-align: center;
		width: 200px;
		height:30px;
		margin:0 auto;
	}
	#login-btn{
		width:100px;
		margin:10px;
		height:30px;
	}
	.token-tip{
		color:red;
	}
</style>

