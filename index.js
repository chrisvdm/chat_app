var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http').Server(app);

// Use this to serve static files like styling
app.use('/static', express.static('static'));

//We define a route handler / that gets called when we hit our website home.
app.get('/', function(req, res){
  // frontend
  res.sendFile(__dirname + '/index.html');
});

// Server port
http.listen(3000, function(){
  console.log('listening on *:3000');
});
