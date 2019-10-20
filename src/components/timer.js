import React from "react";
import  "../design/style.css";
import "../design/bootstrap.min.css";
import Countdown from 'react-countdown-now';
const timer = () => {
    const renderer = ({  minutes, seconds }) => {

        return <span>{minutes}:{seconds}</span>;
      
    };
    return (
 
        <React.Fragment>
              <Countdown
    date={Date.now() + 60000*24-1000}
    renderer={renderer}
  />
        </React.Fragment>
    

    )
}

export default timer;