var User=require('mongoose').model('Foydalanuvchi');
exports.create=function(req,res,next){
   var user =new User(req.body);
   user.save(function(err){
      if(err){
         return next(err);
      }else{
         res.json(user);
      }

   });

};

exports.list=function(req,res,next){
   User.find(
      {},function(err,idiots){
      if(err){return next(err);} else {res.json(idiots);}
   }
   );

};

exports.read=function(req,res){
   res.json(req.user);
};

exports.userById=function(req,res,next,id){
   User.findOne({_id:id},function(err,user){
      if(err){return next(err);}else{req.user=user; next();}
   });

};

exports.userByUsername=function(req,res,next,username){
   User.findOne({_username:username},function(error,user){
      if(err){next(err);}else{req.user=user;next();}
   });

};

exports.update=function(req,res,next){
   User.findByIdAndUpdate(
      req.user.id,req.body,function(err,user){
        if(err){return next(err);}else{res.json(user);}
      }
   );

};

exports.delete=function(req,res,next){
   req.user.remove(function(err){if(err){return next(err);}else{res.json(req.user)}});
};
