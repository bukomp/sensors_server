
module.exports = (io) => {


  io.on('connection', socket => {
    socket.send("Wow connected");
    socket.on('message', async m => {

    });

    socket.on('close', async () => {

    })
  });

};
