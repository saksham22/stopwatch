import React from 'react'

function Lap(props) {
    return (
        <div>
            
            <div id ="display">
            <span>Lap {props.index+1}---></span>

            <span>{( "0"+Math.floor((props.time / 60000) %60)).slice(-2) }:</span>
            <span>{( "0"+Math.floor((props.time / 1000) %60)).slice(-2) }:</span>
            <span>{( "0"+(props.time / 10) %100).slice(-2) }</span>
            <hr></hr>
        </div>
        </div>
    )
}



export default Lap

