// import React, { Component } from 'react'

// export class StopwatchClass extends Component {
//    constructor(){
//     super();
//     this.state = {
//       time: 0,
//       timerOn: false,
//       lap: [],
//     };
//    }
//    // This will add the current value of time to lap list
//    handleLap = () => {
//     // setLap((oldArray) => [...oldArray, time]);
//   };
//   // This will handle reset 
//    handleReset = () => {
//     state.time=0;
//     state.lap = [];
//   }; 
//   // This will handle Resume
//    handleResume = () => {
//     state.timerOn=true;
//   }; 
//   // This will handle Stop
//    handleStop = () => {
//     timerOn=false
//     }; 
//     handleStart = () => {
//         timerOn=true;
//         var interval = null;
//     if (timerOn) {
//       interval = setInterval(() => {
//         time=time+10;
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//     }; 
  
  

//     render() {
//         return (
//             <div className="wrapper">
//       <div className="Timer">
//         <div className="display">
//           <Display time={time}></Display>
//         </div>
//         <hr></hr>
//         <div className="buttons">
//           <button
//             onClick={() => {
//               setTimeOn(true);
//             }}
//           >
            
//             Start
//           </button>
//           {timerOn && <button onClick={handleStop}> Stop </button>}
//           {!timerOn && (
//             <button onClick={handleResume}> Resume </button>
//           )}
//           <button onClick={handleReset}> Reset </button>
//           <button onClick={handleLap}> Lap </button>
//         </div>
//         <hr></hr>
//         <div>
//           <LapList lap={lap}></LapList>
//         </div>
//       </div>
//     </div>
//         )
//     }
// }

// export default StopwatchClass
