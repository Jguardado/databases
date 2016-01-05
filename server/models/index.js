var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      //fetch messages
      //defining a sql query string that selects all users the following:
      //id, text, message, and username.
      var query = "SELECT messages.id, messages.text, messages.roomname FROM MESSAGES \
                  left outer join users on (message.userid = userid)\
                  order by message.id desc";
      //queires the db with the provided query from above
      db.query(query, function(err, results){
        //using a callback to extract the information out of the asynchronous function
        callback(resluts);
      });
    },
    post: function (param, callback) {
      //creates message
      //defines insertion query that leaves the value empty to be passed in through closure
      var query = 'INSERT INTO messages(text, userid, roomname) \
                  values(?, (SELECT id from USERS where username = ? limit 1), ?)';
      //queries the db with the provided query from above
      db.query(query, param, function(err, results){
        //using a callback to extract the information out of the asynchronous function
        callback(resluts);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      //fetch users
      //defining a sql query string that selects all users
      var query = 'SELECT * from USERS';
      //queires the db with the provided query from above
      db.query(query, function(err, results){
        //using a callback to extract the information out of the asynchronous function
        callback(resluts);
      });

    },
    post: function (param, callaback) {
      //creates users
      //defines insertion query that leaves the value empty to be passed in through closure
      var query = 'INSERT INTO USERS(username) VALUES(?)';
      //queries the db with the provided query from above
      db.query(query, param, function(err, results){
        //using a callback to extract the information out of the asynchronous function
        callback(resluts);
      });
    }
  }
};
