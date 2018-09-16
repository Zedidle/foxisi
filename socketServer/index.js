let ROOT = process.cwd();
const redisClient = require(ROOT+"/dbServer/redisClient")

module.exports = function(server){
	const io = require('socket.io')(server);
	io.on('connection', function(socket){
		console.log('a user connected');
		socket.on('chat message', function(msg){
			io.emit('chat message', msg);
			redisClient.rpush('chatrecord',msg);
		});

		socket.on('heartbeat', function(username){
			redisClient.hsetAsync('userheart',username,5);
		});
	});
}