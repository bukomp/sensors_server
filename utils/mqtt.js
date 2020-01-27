const mqtt = require('mqtt');
const config = require('../config');

const client  = mqtt.connect(config.MQTT);
