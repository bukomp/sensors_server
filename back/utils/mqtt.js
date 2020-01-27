const mqtt = require('mqtt');
const config = require('../config');

const client  = mqtt.connect(config.MQTT);

client.subscribe('sensors/#');

module.exports = {
  client
};