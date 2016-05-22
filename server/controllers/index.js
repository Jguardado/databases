var models = require('../models');
var bluebird = require('bluebird');

var makeGetter = function (executor, after) {
  if (!after) {
    after = function (x) {
      return x;
    };
  };

  return function (req, res, next) {
    executor()
      .then(function (data) {
        res.json(after(data));
      }).catch(function (err) {
        next(err);
      });
  };
};

var makeSetter = function (executor, fields) {
  return function (req, res, next) {
    var queryArgs = fields.map(function (field) {
      return req.body[field];
    });

    if (queryArgs.some(function (x) { x === undefined; })) {

      res.send(400);
      return next();
    }

    executor(queryArgs)
      .then(function () {
        res.sendStatus(201);
      }).catch(function (err) {
        next(err);
      });
  };
};

module.exports = {
  messages: {
    get: makeGetter(models.messages.get, function (d) { return d[0];}),

    post: makeSetter(models.users.post, ['message', 'username', 'roomname']),
  },

  users: {
    get: makeGetter(models.users.get),
    post: makeSetter(models.users.post, ['username']),
  },
};
