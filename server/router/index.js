'use strict';

const routes = [
  require('./routes/user'),
  require('./routes/post'),
  require('./routes/feed'),
];

module.exports = {
  route: app => {
    return routes.map(route => {
      return route(app);
    });
  }
};
