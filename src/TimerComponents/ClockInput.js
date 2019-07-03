import React from 'react';
import './ClockInput.css'

const ClockInput = (props) => {
 	return(
		   <div className="inputView">
		      <h2>CountDown Clock</h2>
		      <input 
		      type="number"
		      minutes={props.minutes}
		      onChange={props.onHandleChange}
		      placeholder="Enter Time"
		      required />
		  </div>
     	);

}

export default ClockInput