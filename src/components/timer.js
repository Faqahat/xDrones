import React from "react";
import  "../design/style.css";
import "../design/bootstrap.min.css";
import Timer from "react-compound-timer";

const timer = () => {

    return (
<Timer
    initialTime={60000*24-1000}
    direction="backward"
>
    {() => (
        <React.Fragment>
            <Timer.Minutes />:<Timer.Seconds />
        </React.Fragment>
    )}
</Timer>
    )
}

export default timer;