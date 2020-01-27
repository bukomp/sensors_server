require('dotenv').config();

const PORT = {};
PORT.http = process.env.HTTP;
PORT.https = process.env.HTTPS;

const MQTT = process.env.MQTT;

module.exports = {
  PORT,
  MQTT
};