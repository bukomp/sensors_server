
//// Rewriting console.log to write into .log file ////
const trueLog = console.log;
trueLog("Writing in .log file is *ACTIVE*");
console.log = (msg) => {
  const date = new Date();
  const dateString = `\n[${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] `;
  msg = dateString + msg;
  fs.appendFile("./log.log", msg, err => {
    if (err) { return trueLog(err) }
  });
  trueLog(msg)
};
///////////////////////////////////////////////////////

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const config = require('./config');
const middleware = require('./utils/middleware');

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.use(middleware.requestLogger);
app.use(middleware.errorHandler);

app.use(express.static('./static'));

module.exports = {
  app
};