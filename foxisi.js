const Koa = require('koa');
const app = new Koa();
const path = require('path');
const static_serve = require('koa-static');
const fs = require('fs.promised');
const session = require('koa-session');
const views = require('koa-views');
app.use(require('koa-json')());

// const redisStore = require('koa-redis');

app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
 

app.use(session(CONFIG, app));




app.use(views(__dirname+"/dist", { extension: 'html' }))
app.use(require('koa-static')(__dirname + '/dist'));
require('./routes')(app);



console.log("Listen: 127.0.0.1:3000")
app.listen(3000);