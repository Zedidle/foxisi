export default {
	state: {
		chatContentList:[],
	},
	mutations: {
		appendChatContentLi(state,chatContentLi){
			state.chatContentList.push(chatContentLi);
			setTimeout(function(){
				let chatShow = document.querySelector('.chat-show');
				chatShow.scrollTop = chatShow.scrollHeight;
		
			},0);
		}
	},
	actions: {

	},
	getters: {

	}
}