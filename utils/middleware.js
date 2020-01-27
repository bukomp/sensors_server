const fs = require('fs');


const requestLogger = (req, res, next) => {
  console.log(
    '\nMethod: '+req.method
    +'\nPath:   '+req.path+
    '\nBody:   '+ JSON.stringify(req.body)+
    '\n---'
  );
  next()
};

const trueLog = console.log;
trueLog("Writing in .log file is *ACTIVE*");
console.log = (msg) => {
  const date = new Date();
  const dateString = `\n[${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] `;
  msg = dateString + msg;
  fs.appendFile("../log.log", msg, err => {
    if (err) { return trueLog(err) }
  });
  trueLog(msg)
};

const errorHandler = (e, req, res, next) => {
  console.error(e.message);
  res.status(500).json(e.message);
  next(e)
};


module.exports = {
  requestLogger,
  errorHandler
};