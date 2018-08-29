const redisClient = require("../helpers/redisClient")
const md5 = require('md5');

let tologin = async function(ctx){
	// console.log(ctx.request.body);
	let body = ctx.request.body;

	let username = body.username;
	let token = await redisClient.hgetAsync('usertoken',username);

	if(token){
		// Not person-self login;
		ctx.body = '';
	}else{
		// new user login
		redisClient.hsetAsync('usertoken',username,token);
		redisClient.saddAsync('userlist',username);
		redisClient.save();
		token = md5(username);
		ctx.body = token;
	}
}


let tokenlogin = async function(ctx){
	let body = ctx.request.body;
	let token = body.token;
	let username = body.username;

	let checkToken = await redisClient.hgetAsync('usertoken',username);
	ctx.body = checkToken === token;
}

module.exports = {
	tologin,
	tokenlogin,
}