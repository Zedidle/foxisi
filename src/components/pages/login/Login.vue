<template>
	<div class="login">
		<div class='welcome-title'>🔥欢迎🔥</div>
		<br>
		<h4 class='token-tip' v-show='tokentip'>{{tokentip}}</h4>
		<input 
			@keyup.enter='login'
			id='username'
			placeholder="输入昵称"
			v-model.trim='username'
		>
		<br><br>
		<a @click='login' class="button button-3d button-action button-rounded"><i class="fa fa-sign-in"></i> 敲门</a>
	</div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'

export default {
  name: 'welcome',
  mounted(){
		let vm = this
			,axios = window.axios
			,token = localStorage.getItem('token')
			,username = localStorage.getItem('username');
		
		if(token){
			axios.post('/tokenlogin',{
				token, username
			}).then(response=>{
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
		username:'',
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
		let username = vm.username;
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
		width: 10rem;
		height:44px;
		margin:0 auto;
		font-size:18px;
	}
	.token-tip{
		color:red;
	}
	.welcome-title{
		font-size:36px;
		color: #FFF;
		text-align: center;
	}
</style>

