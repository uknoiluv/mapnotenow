
var path = require('path');

var requestHandler = require('./requestHandler.js');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

var server = app.listen(3000, function(){
  console.log('Listening on port :', server.address().port);
})
