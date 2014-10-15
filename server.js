
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mapnotenow');
var requestHandler = require('./requestHandler.js');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('yeah!!');
});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.render('index');
});

var server = app.listen(3000, function(){
  console.log('Listening on port :', server.address().port);
})

app.post('/signup', function(req, res){
  console.log('req.body', req.body);
  requestHandler.signup(req.body);
  // console.log('res', res);
  res.send('hello world!!');
});
