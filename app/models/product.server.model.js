var mongoose=require('mongoose'),
    Schema=mongoose.Schema;

var ProductSchema=new Schema(
   {
      product_name:String,
      product_price:Number
   }

);

mongoose.model('Product',ProductSchema);
