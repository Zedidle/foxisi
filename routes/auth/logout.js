const redisClient = require("../helpers/redisClient")

let logout = async function (ctx){

	let body = ctx.request.body;
	let username = body.username;
	console.log(username,' logout.');


	await redisClient.sremAsync('userlist',username);
	let result = await redisClient.hdelAsync('usertoken',username);


	ctx.body = result;
}

module.exports = {
	logout
}