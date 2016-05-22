var db = require('../db');

var _ = require('lodash');
var bluebird = require('bluebird');

var makeExecutor = function (queryString) {
  return function (queryArgument) {
    return bluebird.promisify(db.query.bind(db, queryString, queryArgument))();
  };
};

var makeModel = function (querys) {
  return {
    get: makeExecutor(querys.get),
    post: makeExecutor(querys.post),
  };
};

module.exports = {
  messages: makeModel({
    get: ['SELECT messages.id, messages.text, messages.roomname, messages.username',
          'FROM MESSAGES left outer join users on (message.userid = userid)',
          'order by message.id desc;', ].join(),
    post: ['INSERT INTO messages(text, userid, roomname)',
           'values(?, (SELECT id from USERS where username = ? limit 1), ?)',].join(' '),
  }),
  users: makeModel({
    get: 'Select * from users',
    post: 'Insert INTO users(username) Values (?);',
  }),
};
