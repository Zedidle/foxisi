const redisClient = require("../helpers/redisClient")

let sendMessage = async function(ctx){
	let body = ctx.request.body;
	ctx.body = body;
}

module.exports = {
	sendMessage
}