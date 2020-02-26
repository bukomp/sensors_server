import GaugeChart from 'react-gauge-chart'
import React from "react";

const Thermometer = (props) => {


  return(
    <div className={props.className}>
      <GaugeChart
        className={"Thermometer-Gauge"}
        id={props.id}
        percent={+props.value}
        hideText={true}
        needleColor={props.needleColor}
        needleBaseColor={props.needleBaseColor}
        colors={props.colors}
        formatTextValue = { value => value + props.formatTextValue}
      />
      <p className={"Thermometer-Number"} >{(+props.value*100).toFixed(2)+'°C'}</p>
    </div>
  )
};

export default Thermometer;