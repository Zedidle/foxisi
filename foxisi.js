const Koa = require('koa');
const app = new Koa();
const path = require('path');
const static_serve = require('koa-static');
const fs = require('fs.promised');
const views = require('koa-views');










// redis-test
var session = require('koa-generic-session');
var redisStore = require('koa-redis');
app.keys = ['keys', 'keykeys'];
app.use(session({
  store: redisStore({
    // Options specified here
  })
}));
 
app.use(function *() {
  switch (this.path) {
  case '/get':
    get.call(this);
    break;
  case '/remove':
    remove.call(this);
    break;
  case '/regenerate':
    yield regenerate.call(this);
    break;
  }
});
 
function get() {
  var session = this.session;
  session.count = session.count || 0;
  session.count++;
  this.body = session.count;
}
 
function remove() {
  this.session = null;
  this.body = 0;
}
 
function *regenerate() {
  get.call(this);
  yield this.regenerateSession();
  get.call(this);
}
 







app.use(require('koa-static')(__dirname + '/dist'));
app.use(views(__dirname+"/dist", { extension: 'html' }))
require('./routes')(app);


console.log("Listen: 127.0.0.1:3000")
app.listen(3000);