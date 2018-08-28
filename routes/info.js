const redisClient = require('./helpers/redisClient');

redisClient.hset("usertoken","username1","token1");
redisClient.hset("usertoken","username2","token2");
redisClient.hset("usertoken","username3","token3");

redisClient.del("uesrtoken");
 
// redisClient.set("userlist", "val1");
redisClient.lpush("userlist", 1,2,3,4,5,6,7,8,9);
redisClient.save();


let pagetest = async function (ctx, next) {
  await ctx.render('pages/test');
}


let userlist = async function (ctx){
	let l = await redisClient.llenAsync('userlist'); 
	let list = await redisClient.lrangeAsync('userlist',0,l)

	let token = await redisClient.hgetAsync("usertoken","username1")
	ctx.body = {
		token,
		list
	};
}

module.exports = {
	userlist,
	pagetest,
}