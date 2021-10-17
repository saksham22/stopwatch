import React from 'react'
import Display from '../Display/Display'

function Lap(props) {
    return (
        <div>
            
            <div className ="display">
                <span>---Lap {props.index+1}---</span>
                <Display time={props.time}></Display>
            <hr></hr>
        </div>
        </div>
    )
}



export default Lap

