var config=require('./config')(),
    mongoose=require('mongoose');

module.exports=function(){
   console.log(config.db);
   var db=mongoose.connect(config.db);
   require('../app/models/user.server.model');
   require('../app/models/product.server.model');
   return db;

};
