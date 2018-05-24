var users=require('../controllers/user.server.controller');

module.exports=function(app){
  app.route('/users').post(users.create).get(users.list);
  app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);
  app.route('/users/:username').get(users.read).put(users.update);
  app.route('/pagecount').get(users.list);
  app.param('userId',users.userById);
  app.param('username',users.userByUsername);

};
