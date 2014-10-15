
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');

var exports = module.exports = {};

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  username: String,
  password: String,
  salt: String
});
var User = mongoose.model('User', UserSchema);


// exports.handler = function(request, response){
//   var pathName = '.' + request.url;
//   console.log(pathName);
//   if(pathName === './'){
//     pathName = './public/index.html';
//   }
//   fs.exists(pathName, function(exists){
//     if(exists){
//       fs.readFile(pathName, function(err, content){
//         if(err){
//           throw err;
//         }else{
//           var pathExt = path.extname(pathName);
//           var send = function(cont, headKey, headVal){
//             var header = {};
//             header[headKey] = headVal;
//             response.writeHeader(200, header);
//             response.write(cont);
//             response.end();
//           };
          
//           if(pathExt === '.html'){
//             send(content, 'Content-Type', 'text/html');
//           }else if(pathExt === '.css'){
//             send(content, 'Content-Type', 'text/css')
//           }else{
//             send(content, 'Content-Type', 'text/javascript')
//           }
//         }
//       });
//     }else{
//       response.writeHead(400);
//       response.end();
//     }
//   });

// }

exports.signup = function(user){
  console.log('user', user);
  var newUser = new User(user);
  newUser.save(function(err, user){
    if(err){
      console.log('error');
    }
    console.log('saved inside DB');
  });  
};
