export default {
	state: {
		chatContentList:[],
		isShowCode:false,
	},
	mutations: {
		appendChatContentLi(state,chatContentLi){
			let t = new Date(chatContentLi.time);
			chatContentLi.time = ("0"+(t.getMonth()+1)).slice(-2)+"."+   // 月
								("0"+t.getDate()).slice(-2)+" - "+       // 日
								("0"+t.getHours()).slice(-2)+":"+        // 时
								(t.getMinutes()+"0").slice(0,2);         // 分
								
			chatContentLi.color = btnStyle();

			state.chatContentList.push(chatContentLi);
			setTimeout(function(){
				let chatShow = document.querySelector('.chat-show');
				chatShow.scrollTop = chatShow.scrollHeight;
			},0);



			function btnStyle(){
				let S = {
					button:true,
					'button-small':true,
				};

				let colorlist = ['button-primary','button-action','button-highlight','button-caution','button-royal'];

				let ranColor = colorlist[parseInt(Math.random()*colorlist.length)];
				S[ranColor] = true;
				return S;
			}
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