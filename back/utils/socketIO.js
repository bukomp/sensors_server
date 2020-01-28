module.exports = (io) => {
  const mqtt = require('./mqtt').client;

  io.on('connection', socket => {
    console.log(`Socket ${socket.id} connected`);

    mqtt.on('message', (topic, message) => {
      socket.emit('raspberry-cpu-data', message.toString());
    })

    socket.on('disconnect', async () => {
      console.log(`Socket ${socket.id} disconnected`)
    })
  });
};
