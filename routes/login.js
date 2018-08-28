const redisClient = require("./helpers/redisClient")
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
		token = md5(username);
		redisClient.hsetAsync('usertoken',username,md5(username));
		ctx.body = token;
	}
}


let tokenlogin = async function(ctx){
	let body = ctx.request.body;
	let token = body.token;
	let username = body.username;

	let checkToken = await redisClient.hgetAsync('usertoken',username);
	
	ctx.body = checkToken === token;
	
	if(checkToken === token){
		console.log('The token is ok, the user can login.');
	}else{
		console.log('The token is not ok.');
	}
}

module.exports = {
	tologin,
	tokenlogin,
}