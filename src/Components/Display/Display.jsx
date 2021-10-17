import React from "react";
import Utils from "../../Utils/Util";
function Display(props) {
  return (
    <div>
      {Utils(props.time).map((time, index) => (
        <span key={index}>{time}</span>
      ))}
    </div>
  );
}

export default Display;
