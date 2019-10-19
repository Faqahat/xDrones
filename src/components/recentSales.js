import React,{useEffect} from "react";
import toaster from "toasted-notes";
import  "../design/style.css";
import ShoppingCart from "../images/shopping-cart.png"


const RecentSales = () => {
    let Showing = false;
    useEffect(() => {
        loop();
      });
    const loop = () =>{
        setTimeout(() =>
        {
            
           if(!Showing) displayNotification()
            loop();
        }, Math.floor(Math.random() * 15000) + 1000);
    }

    const  displayNotification = () => {
        Showing = true;
        var namesArray = ["Demetrius","Ivan","Eddy","Korey","Jc","Morton","Jimmie","Russell","Morgan","Sammie","Alan","Trey","Owen","Johnnie","Rob","Orval","Johnathon","Merle","Filiberto","Steven","Nickolas","Cristopher","Isaias","Donnie","Byron","Fermin","Theron","Gregorio","Will","Tommie","Don","Reid","Sheldon","Peter","Sydney","Curtis","Monte","Rex","Antonia","Bernie","Hong","Clyde","Doyle","Santos","Carlo","Cedrick","Pasquale","Ervin","Abdul","Roland"];
        var lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var citiesArray = ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Columbus", "Fort Worth", "Indianapolis", "Charlotte", "Seattle", "Denver", "Washington, D.C.", "Boston", "El Paso", "Detroit", "Nashville", "Memphis", "Portland", "Oklahoma City", "Las Vegas", "Louisville", "Baltimore", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Mesa", "Kansas City", "Atlanta", "Long Beach", "Omaha"];
        var randomNameNumber = Math.floor(Math.random() * namesArray.length);
        var randomLastnameNumber = Math.floor(Math.random() * lettersArray.length);
        var randomCityNumber = Math.floor(Math.random() * citiesArray.length);
    
        var randomName = namesArray[randomNameNumber];
        var randomLastname = lettersArray[randomLastnameNumber];
        var randomCity = citiesArray[randomCityNumber];
        var randomMinutes = Math.floor(Math.random() * 10) + 5;

        toaster.notify(({ onClose }) => (
            <div className="ftxsp-wrapper" >
                    <div className="ftxsp-left"><img src={ShoppingCart} alt=""/>
                    </div><div className="ftxsp-right"><div className="ftxsp-head"><span id="random-name-placeholder">{randomName}</span> 
                    <span id="random-lastname-placeholder">  {randomLastname}</span>. from <span id="random-city-placeholder">{randomCity}</span></div>
                    <div className="ftxsp-body">Bought <span className="ftxsp-body-product">DroneX Pro</span></div><div className="ftxsp-footer">
                    <span id="random-time-placeholder">{randomMinutes}</span> minutes ago</div></div></div>
              ),
              {
                  position: "bottom-right",
                  duration: 5000
              });
              setTimeout(Showing = false,6000);
       
    }
    return (<></>)
}

export default RecentSales;



