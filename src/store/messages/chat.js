export default {
	state: {
		chatContentList:[{
			username:'火西肆',
			content:'测试一下~',
			time:new Date()
		}],
	},
	mutations: {
		appendChatContentLi(state,chatContentLi){
			state.chatContentList.push(chatContentLi);
		}
	},
	actions: {

	},
	getters: {

	}
}