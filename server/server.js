// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router/');
const appRouter = express.Router();

const PREFIX = '/hipstr-api/';
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

router.route(appRouter);
app.use(PREFIX, appRouter);

app.use(express.static(__dirname + '/dist'));

app.listen(PORT, () => {
  console.log(`LISTENING TO ${PREFIX}  ON: ${PORT}! While it's still cool... `);
});