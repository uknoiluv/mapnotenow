
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var db = mongoose.connection;

var exports = module.exports = {};

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  username: String,
  password: String,
  salt: String,
  path: []
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
  var salt = bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(user.password, salt, function(err, hash){
      user.password = hash;
      user.salt = salt;
      console.log('salt', salt);
      console.log('hash', hash);
      console.log('user', user);
      var newUser = new User(user);
      newUser.save(function(err, user){
        if(err){
          console.log('error');
        }else{
          console.log('saved inside DB');
        }
      });  
    });
  });
  //var hash = bcrypt.hashSync(user.password, salt);
    // res.redirect('dashboard');
};

exports.login = function(user){
  console.log('hit login');
  console.log('user', user);
  var username = user.username;
  var password = user.password;
  var userObj = {};
  User.findOne({username: username}, function(err, user){
    console.log('err', err);
    console.log('user', user);
    userObj = user;
    var hash = bcrypt.hashSync(password, userObj.salt);
    console.log('hash', hash);
    console.log('userObj.password', userObj.password);
    // if(hash === userObj.password){
    //   console.log('login success');
    // }else{
    //   console.log('login fail');
    // }
    console.log('password', password);
    bcrypt.compare(password, userObj.password, function(err, res){
      console.log('err', err, 'res', res);
      if(res){
        console.log('login success');
      }else{
        console.log('login fail');
      }
    })
  });
};
