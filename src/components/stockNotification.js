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
            <div class="ftxup-wrapper" >
                <div class="ftxup-left">
                    <img src={expMark} alt=""/>
                </div>
                <div class="ftxup-right">
                    <div class="ftxup-head">927 items sold this week</div>
                    <div class="ftxup-footer">Stock is running out!</div>
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



