const redisClient = require("./helpers/redisClient")

let logout = async function (ctx){

	let body = ctx.request.body;
	let username = body.username;
	console.log(username,' logout.');

	let result = await redisClient.hdelAsync('usertoken',username);
	console.log(result);
	if(result){
		console.log(`Username(${username}) logout successfully.`);
	}else{
		console.log(`Username(${username}) logout unsuccessfully.`);
	}
	ctx.body = result;
}

module.exports = {
	logout
}