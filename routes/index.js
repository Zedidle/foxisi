const route = require('koa-route');

let info = require("./information/info");
let login = require("./auth/login");
let logout = require("./auth/logout");


// collection of routes
module.exports = function(app){
	[
		route.get('/',async function (ctx, next) {
		  await ctx.render('index');
		})
		,route.get('/userlist',info.userlist)
		,route.get('/pagetest',info.pagetest)
		,route.get('/chatrecord',info.chatrecord)
		,route.post('/login',login.tologin)
		,route.post('/tokenlogin',login.tokenlogin)
		,route.post('/logout',logout.logout)

	].forEach(route=>{
		app.use(route);
	})
}