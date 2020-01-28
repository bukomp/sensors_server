import React from "react";

const Sensor = (props) => {
  return(
    <div>
      <h2>{props.name}</h2>
      {props.sensor}
    </div>
  )
};

export default Sensor;