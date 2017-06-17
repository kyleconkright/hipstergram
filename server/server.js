// 'use strict';

// const express   = require('express');
// const bodyParser = require("body-parser");
// const path = require('path');
// const router    = require('./router/');
// const appRouter = express.Router();

// const PREFIX    = '/hipstr-api/';
// const PORT      = process.env.PORT || 8080;

// const app = express();
// app.use(bodyParser.json());

// router.route(appRouter);
// app.use(PREFIX, appRouter);

// // Create link to Angular build directory
// var distDir = __dirname + "/dist/";
// app.use(express.static(distDir));

// app.listen(PORT, () => {
//   console.log(`LISTENING TO ${PREFIX}  ON: ${PORT}! While it's still cool... `);
// });

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/');
const appRouter = express.Router();

const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);