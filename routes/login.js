const redisClient = require("./helpers/redisClient")
const md5 = require('md5');

let loginpage = async function (ctx) {
	console.log('Loginpage')
  await ctx.render('login');
}

let tologin = async function(ctx){
	// console.log(ctx.request.body);
	let body = ctx.request.body;

	let username = body.username;
	let token = await redisClient.hgetAsync('usertoken',username);
	if(token){
		console.log(`The username(${username}) has a token,but the user miss it.`);
  		await ctx.render('common/tokentip');

	}else{
		console.log(`The username(${username}) has not a token,it's a new user.`);
  		redisClient.hsetAsync('usertoken',username,md5(username));
  		await ctx.render('index');
	}
}


let tokenlogin = async function(ctx){
	let body = ctx.request.body;
	let token = body.token;
	let username = body.username;

	let checkToken = await redisClient.hgetAsync('usertoken',username);
	if(checkToken === token){
		console.log('The token is ok, the user can login.');
	}else{
		console.log('The token is not ok.');
	}

}


let getToekn = async function(ctx){
	let query = ctx.query;
	let username = query.username;

	if(!username){
		throw Error('The username is not exist,can not get toekn.');
	}else{
		let token = await redisClient.hgetAsync('usertoken',username);
		ctx.body = token;
	}
}

module.exports = {
	loginpage,
	tologin,
	tokenlogin,
	getToekn
}