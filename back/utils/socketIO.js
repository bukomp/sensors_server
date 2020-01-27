module.exports = (io) => {
  const mqtt = require('./mqtt').client;

  io.on('connection', socket => {
    console.log(`Socket ${socket.id} connected`);

    mqtt.on('message', (topic, message) => {
      //console.log(message);
      socket.emit('raspberry-cpu-data', message.toString());
    })

    socket.on('close', async () => {
      console.log(`Socket ${socket.id} disconnected`)
    })
  });
};
