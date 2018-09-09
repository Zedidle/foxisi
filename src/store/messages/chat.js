export default {
	state: {
		chatContentList:[],
		isShowCode:false,
	},
	mutations: {
		appendChatContentLi(state,chatContentLi){
			let t = new Date(chatContentLi.time);
			chatContentLi.time = (t.getMonth()+1)+"."+t.getDate()+" - "+t.getHours()+":"+(t.getMinutes()+"0").slice(0,2); 

			state.chatContentList.push(chatContentLi);
			setTimeout(function(){
				let chatShow = document.querySelector('.chat-show');
				chatShow.scrollTop = chatShow.scrollHeight;
			},0);
		},
		onShowCode(state){
			state.isShowCode = true;
		},
		offShowCode(state){
			state.isShowCode = false;
		}
	},
	actions: {

	},
	getters: {

	}
}