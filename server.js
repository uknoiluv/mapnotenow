
var http = require('http');

var port = 3000;

var ip = '127.0.0.1';

var requestHandler = require('./requestHandler.js');
var server = http.createServer(requestHandler.handler);
console.log('listening on http://' + ip + ':' + port);

server.listen(port, ip);
