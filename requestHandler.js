
var fs = require('fs');

var exports = module.exports = {};

exports.handler = function(request, response){
  console.log('Serving request type' + request.method + ' for url ' + request.url);
  fs.readFile('./index.html', function(err, html){
    if(err){
      throw err;
    }else{
      response.writeHeader(200, {'content-type': 'text/html'});
      response.write(html);
      response.end();
    }
  });

}
