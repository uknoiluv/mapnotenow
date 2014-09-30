
var fs = require('fs');
var path = require('path');

var exports = module.exports = {};

exports.handler = function(request, response){
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var pathName = '.'
  
  if(request.url === '/'){
    pathName = './index.html';
  }else{
    fs.exists('.' + request.url, function(exist){
      if(!exist){
        response.writeHead(500);
        response.end();
      }else{
        pathName = '.' + request.url;
      }
    });
  }

  fs.readFile(pathName, function(err, content){
    console.log('pathName', pathName);
    if(err){
      throw err;
    }else{
      var pathExt = path.extname(pathName);
      console.log('pathExt + ', pathExt, request.url);
      var send = function(cont, headKey, headVal){
        var header = {};
        header[headKey] = headVal;
        response.writeHeader(200, header);
        response.write(cont);
        response.end();
      };
      if(pathExt === '.js'){
        send(content, 'Content-Type', 'application/javascript')
      }else if(pathExt === '.html'){
        send(content, 'Content-Type', 'text/html');
      }else if(pathExt === '.css'){
        send(content, 'Content-Type', 'text/css')
      }else{
        send(500);
      }
    }
  });

}
