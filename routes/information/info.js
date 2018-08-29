const redisClient = require('../helpers/redisClient');

let pagetest = async function (ctx, next) {
  await ctx.render('pages/test');
}

let userlist = async function (ctx){
	ctx.body = await redisClient.smembersAsync('userlist');
}

module.exports = {
	userlist,
	pagetest,
}