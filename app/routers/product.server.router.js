var product_controller=require('../controllers/product.server.controller');
module.exports=function(app){
   app.route('/products').post(product_controller.create);
};
