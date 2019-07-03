import React from 'react';
import './Clock.css'

const Clock = (props) => {
	return (
       <div>
        <h1 className="clockView">
	        {props.minutes} : {props.seconds} 
        </h1>
       </div>
     );
}

export default Clock