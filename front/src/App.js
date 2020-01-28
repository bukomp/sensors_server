import React, {useEffect, useState} from 'react';
import subscribeToRaspberryCpuData from "./components/socket.io";
import './App.css';
import Thermometer from "./components/Thermometer";
import Sensor from "./components/Sensor";

const App = () => {

  const [ cpuTemp, setCpuTemp ] = useState(0);

  useEffect(()=>{subscribeToRaspberryCpuData(setCpuTemp);}, []);

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
          value={cpuTemp}
        />}
      />


    </div>
  );
}

export default App;
