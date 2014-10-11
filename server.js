
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mapnotenow');
// var requestHandler = require('./requestHandler.js');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('yeah!!');
});

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

var server = app.listen(3000, function(){
  console.log('Listening on port :', server.address().port);
})

app.post('/login', function(req, res){
  console.log('req', req);
  console.log('res', res);
  res.send('hello world!!');
});
