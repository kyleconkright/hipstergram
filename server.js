// server.js
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const router = require('./router/');
const appRouter = express.Router();

const PREFIX = '/hipstr-api/';
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());


router.route(appRouter);
app.use(PREFIX, appRouter);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`LISTENING TO ${PREFIX}  ON: ${PORT}! While it's still cool... `);
});