const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

//const mainRouter = require('./controller/main');
const config = require('./config');
const middleware = require('./utils/middleware');

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.use(middleware.requestLogger);
app.use(middleware.errorHandler);

app.use(express.static('./front'));

module.exports = {
  app
};