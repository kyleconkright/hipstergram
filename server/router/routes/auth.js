const db = require('../../db');
const { Post, User } = db.models;
// const passport = require('passport')
const passport = require('passport-local');
module.exports = app => {
  app.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/login',
      successRedirect: '/'
    })
  );
};
