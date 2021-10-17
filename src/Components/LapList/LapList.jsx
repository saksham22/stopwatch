import React from "react";
import Lap from "./Lap";
export const LapList = (props) => (
  

  <div className="lap-list">
    {props.lap.map((time, index) => (
      <Lap key={index} time={time} index={index}></Lap>
    ))}
  </div>
  
);




