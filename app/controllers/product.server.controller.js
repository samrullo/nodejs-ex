var Product=require('mongoose').model('Product');

exports.create=function(req,res,next){
  var product=new Product(req.body);
  product.save(
     function(err){
        if(err){return next(err);}else{ res.json(product); }
     }

  );

};
