module.exports = (io) => {
  const mqtt = require('./mqtt').client;
  const serverData = require('./serverData');

  io.on('connection', socket => {
    console.log(`Socket ${socket.id} connected`);

    const interval = setInterval(async () => {
      socket.emit('server-cpu-data', serverData.getCPUTemp());
    }, 1000);

    mqtt.on('message', (topic, message) => {
      socket.emit('raspberry-cpu-data', message.toString());
    });

    socket.on('disconnect', async () => {
      console.log(`Socket ${socket.id} disconnected`);
      clearInterval(interval);
    })
  });
};
