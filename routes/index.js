const route = require('koa-route');

let info = require("./information/info");
let login = require("./auth/login");
let logout = require("./auth/logout");
let messages = require("./features/messages");




// collection of routes
module.exports = function(app){
	[
		route.get('/',async function (ctx, next) {
		  await ctx.render('index');
		}),
		route.get('/userlist',info.userlist),
		route.get('/pagetest',info.pagetest),
		route.post('/login',login.tologin),
		route.post('/tokenlogin',login.tokenlogin),
		route.post('/logout',logout.logout),
		route.post('/sendMessage',messages.sendMessage)


	].forEach(route=>{
		app.use(route);
	})

}