import React, { useState, useEffect } from "react";
import Display from "../Display/Display";
import { LapList } from "../LapList/LapList";
import "./Stopwatch.css";
function StopWatch() {
  // using 3 hooks to manage state of timer and laplist
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);
  const [lap, setLap] = useState([]);

  // This will add the current value of time to lap list
  const handleLap = () => {
    setLap((oldArray) => [...oldArray, time]);
  };
  // This will handle reset
  const handleReset = () => {
    setTime(0);
    setTimeOn(false);
    setLap((oldArray) => []);
  };
  // This will handle Resume
  const handleResume = () => {
    setTimeOn(true);
  };
  // This will handle Stop
  const handleStop = () => {
    setTimeOn(false);
  };
  const handleStart = () => {
    setTimeOn(true);
  };

  useEffect(() => {
    var interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="wrapper">
      <div className="Timer">
        <div className="display">
          <Display time={time}></Display>
        </div>
        <hr></hr>
        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          {timerOn && <button onClick={handleStop}> Stop </button>}
          {!timerOn && <button onClick={handleResume}> Resume </button>}
          <button onClick={handleReset}> Reset </button>
          <button onClick={handleLap}> Lap </button>
        </div>
        <hr></hr>
        <div>
          <LapList lap={lap}></LapList>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
