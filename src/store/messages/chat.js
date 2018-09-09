export default {
	state: {
		chatContentList:[],
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
		}
	},
	actions: {

	},
	getters: {

	}
}