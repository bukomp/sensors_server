const { spawnSync } = require('child_process');

const getCPUTemp = () => {
    const tempString = (((spawnSync("sensors", { encoding : 'utf8' })).stdout)
        .match(/k10temp-pci-00c3\nAdapter: PCI adapter\ntemp1:\s+\+([0-9]+.[0-9])/g))[0]
        .match(/([0-9][0-9][.][0-9])/g);

    return tempString;
};

module.exports = {
    getCPUTemp
};