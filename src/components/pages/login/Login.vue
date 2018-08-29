<template>
	<div class="login">
		<div class='welcome-title'>欢迎肥宅归来~</div>
		<br>
		<h4 class='token-tip' v-show='tokentip'>{{tokentip}}</h4>
		<input id='username' name='username' placeholder="请输入您的用户名">
		<br><br>
		<a @click='login' class="button button-action button-rounded">登录</a>
	</div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'

export default {
  name: 'welcome',
  mounted(){
		let vm = this;
		let token = localStorage.getItem('token'),
			username = localStorage.getItem('username');
		
		if(token){
			axios.post('/tokenlogin',{
				token, username
			}).then(response=>{
				console.log(response);
				let isTrueToken = response.data;
				if(isTrueToken){
					vm.toLogin();
				}
			}).catch(error=>{
				console.error(error);
			})
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

		let axios = window.axios;
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
		width: 240px;
		height:50px;
		margin:0 auto;
		font-size:18px;
	}
	.token-tip{
		color:red;
	}
	.welcome-title{
		font-size:48px;
		text-align: center;
	}
</style>

