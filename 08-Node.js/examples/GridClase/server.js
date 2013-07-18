var http = require('http'),
	express = require('express'),
	cons = require('consolidate'),
	swig = require('swig'),
	io = require('socket.io');

var app = express();
var server = http.createServer(app);
var users = {};
var sockeio = io.listen(server);

app.use(express.static('./public'));

swig.init({
	cache: false
});

app.engine('.html', cons.swig);
app.set('view engine', ".html");
app.set('views', './views');

app.get('/', function(req, res){
	res.render('home');
});

sockeio.sockets.on('connection', function(socket){
	console.log('socket', socket.store.id);

	socket.emit('init',users);

	socket.on('move', function(user){
		users[user.id] = user;
		socket.broadcast.emit('move', user);
	});

	socket.on('disconect', function(){
		delete users[socket.store.id];
		socket.broadcast.emit('remove', {id: socket.store.id})
	});
});

server.listen(3000);
console.log('Servidor escuchando en el puerto 3000');
