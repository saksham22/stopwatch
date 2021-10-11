// import React from 'react'
// import PropTypes from 'prop-types'

// function LapList(props) {
//     return (
//         <div>
            
//         </div>
//     )
// }

import React from 'react'
import Lap from './Lap';
export const LapList = props =>(

        
        <div className='lap-list'>
        {
            
            props.lap.map((time,index) => (
                <Lap key={index} time={time} index={index}></Lap>
                ))
        
        }
        
    </div>
    
    // else{
    //     <div>
    //         <h1>Laps goes here</h1>
    //     </div>
    // }
);


// export default LapList

