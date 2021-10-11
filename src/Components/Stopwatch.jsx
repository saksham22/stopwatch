import React from 'react';
import { LapList } from './LapList/LapList';
import './Stopwatch.css';
function StopWatch() {

  const handleLap = () =>{
    setLap(oldArray => [...oldArray, time]);
  }
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);
  const [lap, setLap] = React.useState([]);

  // setTheArray(oldArray => [...oldArray, newElement]);
  const handleReset = () =>{
    setTime(0);
    setLap(oldArray => []);
  }
  React.useEffect(
    () =>{
      let interval = null ;
      if (timerOn){
        interval = setInterval(()=>{
          setTime(prevTime =>prevTime+10)
        },10)
      }
      else{
        clearInterval(interval);
      }
      return ()=>clearInterval(interval)
    },[timerOn]
  );
    return (
        <div id='wrapper'>
        <div className="Timer">
        <div id ="display">
            <span>{( "0"+Math.floor((time / 60000) %60)).slice(-2) }:</span>
            <span>{( "0"+Math.floor((time / 1000) %60)).slice(-2) }:</span>
            <span>{( "0"+(time / 10) %100).slice(-2) }</span>
        </div>
        <hr></hr>
        <div id = "buttons">
        <button onClick={()=>{setTimeOn(true);}}> Start </button>
        {
                timerOn && (
                  <button onClick={() => setTimeOn(false)}> Stop </button> 
                )
              }
        {
          !timerOn && (
            <button onClick={()=>setTimeOn(true)}> Resume </button> 
          )
        }
          { " "}<button onClick={handleReset}> Reset </button>   { " "}{ " "}
          <button onClick={handleLap}> Lap </button>
          </div>
          <hr></hr>
        <div>
          <LapList lap={lap}></LapList>  
        </div>
        </div>

        </div>
    )
}

export default StopWatch;
