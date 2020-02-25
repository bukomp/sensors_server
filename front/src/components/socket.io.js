import io from "socket.io-client";

const socket = io();


export const subscribeToRaspberryCpuData = (setState) => {
  socket.on('raspberry-cpu-data', data => {
    setState((data/100).toFixed(4));
  })
};

export const subscribeToServerCpuData = (setState) => {
  socket.on('server-cpu-data', data => {
    setState((data/100).toFixed(4));
  })
};
