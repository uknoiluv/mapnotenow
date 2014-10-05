
// var http = require('http');

// var port = 3000;

// var ip = '127.0.0.1';
var path = require('path');

var requestHandler = require('./requestHandler.js');
// var server = http.createServer(requestHandler.handler);
// console.log('listening on http://' + ip + ':' + port);

// server.listen(port, ip);

var express = require('express');
var app = express();

// app.set('views', path.join(__dirname, '/public'));
// app.set('view engine', 'html');

// app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/*', function(req, res){
  console.log('req.params', req.params[0]);
  res.sendFile(req.params[0]);
})

// app.all('/bower_components/*', function(req, res){
//   console.log('req.params', req.params[0]);
//   res.sendFile('/bower_components/' + req.params[0]);
// })

var server = app.listen(3000, function(){
  console.log('Listeningo on port :', server.address().port);
})
