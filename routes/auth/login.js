let ROOT = process.cwd();
const redisClient = require(ROOT+"/dbServer/redisClient")
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
		redisClient.hsetAsync('usertoken',username,token);
		redisClient.saddAsync('userlist',username);
		redisClient.save();
		ctx.body = token;
	}
}


let tokenlogin = async function(ctx){
	let body = ctx.request.body;
	let token = body.token;
	let username = body.username;

	let checkToken = await redisClient.hgetAsync('usertoken',username);
	console.log(checkToken);
	console.log(token);
	console.log(username);
	ctx.body = checkToken === token;
}

module.exports = {
	tologin,
	tokenlogin,
}