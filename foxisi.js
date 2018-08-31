	const Koa = require('koa');
	const app = new Koa();
	const server = require('http').createServer(app.callback());
	const socket = require('./socketServer');
	socket(server);

	const path = require('path');
	const static_serve = require('koa-static');
	const fs = require('fs.promised');
	const views = require('koa-views');

	app.use(require('koa-json')());

	app.use(require('koa-bodyparser')());


	app.use(views(__dirname+"/dist", { extension: 'html' }))
	app.use(require('koa-static')(__dirname + '/dist'));
	app.use(require('koa-static')(__dirname + '/static'));
	require('./routes')(app);



	server.listen(3000);
	console.log("AppServer and SocketServer at: 127.0.0.1:3000")