const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');


let info = require("./info");
let login = require("./login");


let index_page = async function (ctx, next) {
  await ctx.render('index');
}


// 路由汇集
module.exports = function(app){
	app.use(route.get('/',index_page));


	app.use(route.get('/userlist',info.userlist))
	app.use(route.get('/pagetest',info.pagetest))


	app.use(route.get('/login',login.loginpage))
	app.use(route.post('/login',login.tologin))
	app.use(route.post('/tokenlogin',login.tokenlogin))
	app.use(route.get('/getToken',login.getToekn))
	

	
}