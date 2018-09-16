
let ROOT = process.cwd();
const redisClient = require(ROOT+"/dbServer/redisClient")
// const redisClient = require("../helpers/redisClient")

let logout = async function (ctx){

	let body = ctx.request.body;
	let username = body.username;
	console.log(username,' logout.');

	await redisClient.sremAsync('userlist',username);
	ctx.body = await redisClient.hdelAsync('usertoken',username);
}

module.exports = {
	logout
}