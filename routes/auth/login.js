let ROOT = process.cwd();
const redisClient = require(ROOT+"/dbServer/redisClient")
const md5 = require('md5');

function listHeartbeat(username){
	redisClient.saddAsync('userlist',username);
	redisClient.hsetAsync('userheart',username,5);
	(function lambda(){
		setTimeout(function(){
			redisClient.hincrbyAsync('userheart',username,-1)
			.then(r=>{
				if(r > 0){
					lambda();
				}else{
					redisClient.hdelAsync('userheart',username);
					redisClient.sremAsync('userlist',username);
					console.log(username ," leave the room!")
				}
			})
		},4000);
	})();
}


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
		redisClient.save();
		ctx.body = token;
	}
	listHeartbeat(username);

}


let tokenlogin = async function(ctx){
	let body = ctx.request.body;
	let token = body.token;
	let username = body.username;

	let checkToken = await redisClient.hgetAsync('usertoken',username);
	ctx.body = checkToken === token;
	listHeartbeat(username);
}

module.exports = {
	tologin,
	tokenlogin,
}