const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');

let info = require("./info");
let login = require("./login");
let logout = require("./logout");

let index_page = async function (ctx, next) {
  await ctx.render('index');
}

// collection of routes
module.exports = function(app){
	app.use(route.get('/',index_page));

	app.use(route.get('/userlist',info.userlist))
	app.use(route.get('/pagetest',info.pagetest))

	app.use(route.post('/login',login.tologin))
	app.use(route.post('/tokenlogin',login.tokenlogin))
	
	app.use(route.post('/logout',logout.logout))
}