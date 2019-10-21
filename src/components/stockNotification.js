import React,{useEffect} from "react";
import toaster from "toasted-notes";
import  "../design/style.css";
import expMark from "../images/exclamation-icon.png"


const RecentSales = () => {
    let timesShown = 0;
    useEffect(() => {
        loop();
      });

    const loop = () =>{
        setTimeout(() =>
        {
            
            displayNotification()
            loop();
        }, Math.floor(Math.random() * 15000) + 8000);
    }

    const  displayNotification = () => {
        if(timesShown < 1)
        {

        toaster.notify(({ onClose }) => (
            <div className="ftxup-wrapper" >
                <div className="ftxup-left">
                    <img src={expMark} alt=""/>
                </div>
                <div className="ftxup-right">
                    <div className="ftxup-head">927 xDrone Pro sold this week</div>
                    <div className="ftxup-footer">Stock is running out!</div>
                </div>
            </div>
              ),
              {
                  position: "top-left",
                  duration: 5000
              });
        timesShown = 1;
        }
    }
    return (<></>)
}

export default RecentSales;



