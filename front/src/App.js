import React, {useEffect, useState} from 'react';
import {subscribeToRaspberryCpuData, subscribeToServerCpuData} from "./components/socket.io";
import './App.css';
import Thermometer from "./components/Thermometer";
import Sensor from "./components/Sensor";

const App = () => {

    const [ raspberryCpuTemp, setRaspberryCpuTemp ] = useState(0);
    const [ serverCpuTemp, setServerCpuTemp ] = useState(0);

  useEffect(()=>{
      subscribeToRaspberryCpuData(setRaspberryCpuTemp);
      subscribeToServerCpuData(setServerCpuTemp);
  }, []);

  return (
    <div className={"App"}>
      <header>
        <h1>sensors.LIRA</h1>
      </header>
        <Sensor
            name={"Raspberry PI CPU temp."}
            sensor={<Thermometer
                className={"Thermometer"}
                id="chart-1"
                needleColor="#B5B5B5"
                needleBaseColor="#B5B5B5"
                colors={["#03DB00", "#E2F30A", "#FF0000"]}
                formatTextValue = {'°C'}
                value={raspberryCpuTemp}
            />}
        />
        <Sensor
            name={"Server CPU temp."}
            sensor={<Thermometer
                className={"Thermometer"}
                id="chart-2"
                needleColor="#B5B5B5"
                needleBaseColor="#B5B5B5"
                colors={["#03DB00", "#E2F30A", "#FF0000"]}
                formatTextValue = {'°C'}
                value={serverCpuTemp}
            />}
        />


    </div>
  );
};

export default App;
