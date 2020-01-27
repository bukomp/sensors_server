const app = require('./app');
const config = require('./config');


const server = require('http').createServer((req, res) => {
  console.log("301");
  res.writeHead(301, {"Location": "https://" + req.headers['host'] + req.url});
  res.end();
});

const secureServer = require('http').createServer(app.app);

const socketIO = require('socket.io');
const io = socketIO(secureServer);
require('./utils/socketIO')(io);

server.listen(config.PORT.http, () => {
  console.log(`Redirecting server running on port ${config.PORT.http}`)
});

secureServer.listen(config.PORT.https, () => {
  console.log(`Server running on port ${config.PORT.https}`)
});