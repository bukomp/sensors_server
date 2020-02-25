const si = require('systeminformation');

const getCPUTemp = async () => {
    return (await si.cpuTemperature()).main;
};

module.exports = {
    getCPUTemp
};