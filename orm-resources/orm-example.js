/* You'll need to
 * npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require('sequelize');
var sequelize = new Sequelize('chat', 'root', '');

var User = sequelize.define('User', {
  username: Sequelize.STRING,
});

var Message = sequelize.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING,
});

Message.belongsTo(User);
User.sync();

exports.User = User;
exports.Message = Message;
