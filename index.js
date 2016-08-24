var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http').Server(app);

// instantiate socket.io
var io = require('socket.io')(http);

// Use this to serve static files like styling
app.use('/static', express.static('static'));

//We define a route handler / that gets called when we hit our website home.
app.get('/', function(req, res){
  // frontend
  res.sendFile(__dirname + '/index.html');
});

// Listen on connection event for incoming sockets
io.on('connection', function(socket){
  console.log('a user connected');
  // Listens for when a user disconnects
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// Server port
http.listen(3000, function(){
  console.log('listening on *:3000');
});
