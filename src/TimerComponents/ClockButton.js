import React from 'react';
import './ClockButton.css'

const ClockButton = (props) => {
	return(
	      <div className="buttonView">
	       <button onClick={props.startCountDown} className="btnSpacing">Start</button>
	       <button onClick={props.stopCountDown} className="btnSpacing">Stop</button>
	     </div>
      	);
}

export default ClockButton