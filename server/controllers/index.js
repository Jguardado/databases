var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        //handle err
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //param must be passed in as an array.
      var param = [req.body[text], req.body[username], req.body[roomname]]

      models.messages.post(param, function(err, results){
        //handle err
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results){
        //handle err
        res.json(results);
      });

    },
    post: function (req, res) {
      //param must be passed in as an array.
      var param = [req.body[username]];

      models.users.post(param, function(err, results){
        //handle err
        res.json(results);
      });

    }
  }
};
