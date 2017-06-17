'use strict';

const express   = require('express');
const router    = require('./router/');
const appRouter = express.Router();

const PREFIX    = '/hipstr-api/';
const PORT      = 4201;

const app = express();

router.route(appRouter);
app.use(PREFIX, appRouter);

app.listen(PORT, () => {
  console.log(`LISTENING TO ${PREFIX}  ON: ${PORT}! While it's still cool... `);
});
