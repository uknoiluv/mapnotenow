
var fs = require('fs');
var path = require('path');

var exports = module.exports = {};

exports.handler = function(request, response){
  var pathName = '.' + request.url;
  console.log(pathName);
  if(pathName === './'){
    pathName = './public/index.html';
  }
  fs.exists(pathName, function(exists){
    if(exists){
      fs.readFile(pathName, function(err, content){
        if(err){
          throw err;
        }else{
          var pathExt = path.extname(pathName);
          var send = function(cont, headKey, headVal){
            var header = {};
            header[headKey] = headVal;
            response.writeHeader(200, header);
            response.write(cont);
            response.end();
          };
          
          if(pathExt === '.html'){
            send(content, 'Content-Type', 'text/html');
          }else if(pathExt === '.css'){
            send(content, 'Content-Type', 'text/css')
          }else{
            send(content, 'Content-Type', 'text/javascript')
          }
        }
      });
    }else{
      response.writeHead(400);
      response.end();
    }
  });

}
