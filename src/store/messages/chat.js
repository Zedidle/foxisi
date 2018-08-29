export default {
	state: {
		chatContentList:[{
			username:'zfc',
			content:'2333',
			time:new Date()
		},{
			username:'zfc',
			content:'2333',
			time:new Date()
		},{
			username:'zfc',
			content:'2333',
			time:new Date()
		},{
			username:'zfc',
			content:'2333',
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