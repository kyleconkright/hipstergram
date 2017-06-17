'use strict';

const express   = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const router    = require('./router/');
const appRouter = express.Router();

const PREFIX    = '/hipstr-api/';
const PORT      = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

router.route(appRouter);
app.use(PREFIX, appRouter);

// Create link to Angular build directory
app.use(express.static(__dirname + '/dist'));


app.listen(PORT, () => {
  console.log(`LISTENING TO ${PREFIX}  ON: ${PORT}! While it's still cool... `);
});


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});