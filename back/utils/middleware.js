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

const errorHandler = (e, req, res, next) => {
  console.error(e.message);
  res.status(500).json(e.message);
  next(e)
};


module.exports = {
  requestLogger,
  errorHandler
};