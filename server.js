process.env.NODE_ENV=process.env.NODE_ENV || 'development';
process.env.MONGO_URL='mongodb://localhost/mean-book';
var express=require('./config/express');
var mongoose=require('./config/mongoose');
var db=mongoose();
var app=express();
var port=process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip=process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.listen(port,ip);
module.exports=app;
console.log("Server running bachchagar http://%s:%s",ip,port);

