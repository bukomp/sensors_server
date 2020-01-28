import io from "socket.io-client";

const socket = io();


const subscribeToRaspberryCpuData = (setState) => {
  socket.on('raspberry-cpu-data', data => {
    setState((data/100).toFixed(4));
  })
}

export default subscribeToRaspberryCpuData