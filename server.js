// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const router = require('./server/router/');
const appRouter = express.Router();
const db = require('./server/db/');

const PREFIX = '/hipstr-api/';
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: 'thisisthekey' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function(username, password, done) {
    db.models.User.findOne({ username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.password_hash !== password) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.models.User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.route(appRouter);
app.use(PREFIX, appRouter);

app.use(express.static(__dirname + '/dist'));

app.get('/routes', (req, res) => {
  res.sendFile('./server/routes.html');
});

app.listen(PORT, () => {
  db.on('error', err => {
    console.log('MONGOOSE CONNECTION ERROR ', err);
  });
  console.log(`LISTENING TO ${PREFIX}  ON: ${PORT}! While it's still cool... `);
});
