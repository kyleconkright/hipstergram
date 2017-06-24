'use strict';

const routes = [
  require('./routes/user')
];

module.exports = {
  route: app => {
    return routes.map(route => {
      return route(app);
    });
  }
};
