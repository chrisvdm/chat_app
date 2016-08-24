var app = require('express')();
var http = require('http').Server(app);

//We define a route handler / that gets called when we hit our website home.
app.get('/', function(req, res){
  res.sendFile('index.html');
});

// Server port
http.listen(3000, function(){
  console.log('listening on *:3000');
});
