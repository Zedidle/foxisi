<script>
	import { mapState,mapMutations } from 'vuex'
	export default {
		mounted(){
			console.log('socketServer on');
			const vm = this,
				socket = window.socket;
			socket.on('chat message', function(msg){
				console.log('get chat message: ')
				console.log(msg)
				vm.appendChatContentLi(JSON.parse(msg))
			});
		},
		methods:{
			...mapMutations([
				'appendChatContentLi'
			]),
		}
	}
</script>