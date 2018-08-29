let ROOT = process.cwd();
const redisClient = require(ROOT+"/dbServer/redisClient")

let pagetest = async function (ctx, next) {
  await ctx.render('pages/test');
}

let userlist = async function (ctx){
	ctx.body = await redisClient.smembersAsync('userlist');
}

let chatrecord = async function(ctx){
	ctx.body = await redisClient.lrangeAsync('chatrecord',0,-1);
}

module.exports = {
	userlist
	,pagetest
	,chatrecord
}