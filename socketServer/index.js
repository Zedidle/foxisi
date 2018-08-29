module.exports = function(server){
	const io = require('socket.io')(server);
	io.on('connection', function(socket){ 
		console.log('a user connected');
		socket.on('chat message', function(msg){
			io.emit('chat message', msg);
		});
	});
}