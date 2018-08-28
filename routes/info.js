
const redis = require("redis"),
    client = redis.createClient();

const bluebird = require("bluebird");

	bluebird.promisifyAll(redis.RedisClient.prototype);
	bluebird.promisifyAll(redis.Multi.prototype);

client.on("error", function (err) {
    console.log("Error " + err);
});



client.hmset("usertoken","username1","token1");
client.hmset("usertoken","username2","token2");
client.hmset("usertoken","username3","token3");

client.del("uesrtoken");
 
// client.set("userlist", "val1");
client.lpush("userlist", 1,2,3,4,5,6,7,8,9);
client.save();


let pagetest = async function (ctx, next) {
  await ctx.render('pages/test');
}


let userlist = async function (ctx){
	let l = await client.llenAsync('userlist'); 
	let list = await client.lrangeAsync('userlist',0,l)

	let token = await client.hgetAsync("usertoken","username1")
	ctx.body = {
		token,
		list
	};
}

module.exports = {
	userlist,
	pagetest,
}