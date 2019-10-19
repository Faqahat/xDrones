import React,{useState,useRef,useContext} from "react"

import  "../design/style.css"
import "../design/bootstrap.min.css"
import addImage from "../images/add.svg"
import upSell1 from "../images/upsell_1.png"
import upSell2 from "../images/upsell_2.jpg"
import upSell3 from "../images/upsell_3.jpg"
//import Client from "shopify-buy";
import {CheckoutContext} from "./stepOne"
// Drone ID : Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDg5NjU1NTY4Nzk4NQ==
// Cam Variant ID : Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA2MTk3NjExMw=
// Propeller ID : Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA2NjQ5ODA5Nw==
// Protective Bag  ID:  Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA3NDE5ODU3Nw==



const SetTwo = () => {

let myRef = useRef()
let [addOn1 , setAddOn1] = useState(false);
let [addOn2 , setAddOn2] = useState(false);
let [addOn3 , setAddOn3] = useState(false);
let [checkout] = useContext(CheckoutContext); 


    /*const client = Client.buildClient({
        domain: 'xdronespro.myshopify.com',
        storefrontAccessToken: '9607987e0513ca24237f22f5f6bda724'
      },fetch);*/
      

const addAddon = (addon) => {
   
    if(addon === 1)      { 
        AddItem("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA2MTk3NjExMw==");
        setAddOn1(true); 
    }
    else if(addon === 2)  
    { 
        AddItem("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA2NjQ5ODA5Nw==");
        setAddOn2(true); 
    }
    else if(addon === 3) { 
        AddItem("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA3NDE5ODU3Nw==");
        setAddOn3(true); 
    }
    window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
}
const AddItem = (variant_id) =>{

    const lineItemsToAdd = [
      {
        variantId: variant_id,
        quantity: checkout.quantity
      }
    ];
    console.log(checkout)
    
    checkout.client.checkout.addLineItems(checkout.checkoutId, lineItemsToAdd).then((checkout) => {

      console.log("Added to Cart [Quantity :" + checkout.quantity + "]"  );
     
      }).catch(error => console.log(error));

}

const removeAddon = (addon) => {
    console.log(addon)
    if(addon === 1) return setAddOn1(false);
    if(addon === 2) return setAddOn2(false);
    if(addon === 3) return setAddOn3(false);
    else return ""
}
return(
<>
<div id="step-2-section" className="">
    <div className="step-2-head col-xs-12 step-header white" id="step-2-head">STEP #2: SELECT BEST SELLING ACCESSORIES</div>
    <div className="upsells col-xs-12 upsell-col"></div>
    <div className={"row upsell-row" + (addOn1 === true?" added-row":"")}>
        <div className="col-sm-4 img-col">
            <img alt= "" src={upSell1}/>
        </div>
        <div className="col-sm-8 text-col">
            <div className="upsell-name">720P High Definition Camera</div>
            <div className="upsell-description">Upgrade the camera of your drone to a high quality optical 720p lens</div>
            <div className="upsell-price">
            <div className="upsell-old-price"><span className="dynamic-price-placeholder" data-versionid="2" data-type="divided" data-dividedby="0.21">90</span> <span className="dynamic-currency-sign">$</span></div>
            <div className="upsell-new-price"> , Now only <span className="dynamic-price-placeholder" data-versionid="2" data-type="normal">24</span> <span className="dynamic-currency-sign">$</span>,- each</div>
            </div>
            {
                (addOn1 === false ? <div className="btn btn-lg upsell-add-button" onClick={() => addAddon(1)}>ADD <img alt= "" src={addImage}/></div> : 
                <div className="btn btn-lg upsell-remove-button" onClick={() => removeAddon(1)}>REMOVE  <i className='fas fa-times-circle red'></i></div>)
            }
            <div></div>
        </div>
    </div>
    <div className={"row upsell-row" + (addOn2 === true?" added-row":"")}>
        <div className="col-sm-4 img-col">
            <img alt= "" src={upSell2}/>
        </div>
        <div className="col-sm-8 text-col">
            <div className="upsell-name">Propellerblades protectors</div>
            <div className="upsell-description">These handy brackets protect your precious propellerblades from breaking or getting lost</div>
            <div className="upsell-price">
            <div className="upsell-old-price"><span className="dynamic-price-placeholder" data-versionid="2" data-type="divided" data-dividedby="0.21">29</span> <span className="dynamic-currency-sign">$</span></div>
            <div className="upsell-new-price"> , Now only <span className="dynamic-price-placeholder" data-versionid="2" data-type="normal">11</span> <span className="dynamic-currency-sign">$</span>,- each</div>
            </div>
            {
                (addOn2 === false ? <div className="btn btn-lg upsell-add-button" onClick={() => addAddon(2)}>ADD <img alt= "" src={addImage}/></div> : 
                <div className="btn btn-lg upsell-remove-button" onClick={() => removeAddon(2)}>REMOVE  <i className='fas fa-times-circle red'></i></div>)
            }
            
            <div></div>
        </div>
    </div>
    <div className={"row upsell-row" + (addOn3 === true?" added-row":"")}>
        <div className="col-sm-4 img-col">
            <img alt= "" src={upSell3}/>
        </div>
        <div className="col-sm-8 text-col">
            <div className="upsell-name">DroneX Pro protective case</div>
            <div className="upsell-description">A waterproof, sturdy and compact case to carry your DroneX Pro while providing it maximum protection.</div>
            <div className="upsell-price">
            <div className="upsell-old-price"><span className="dynamic-price-placeholder" data-versionid="2" data-type="divided" data-dividedby="0.21">79</span> <span className="dynamic-currency-sign">$</span></div>
            <div className="upsell-new-price"> , Now only <span className="dynamic-price-placeholder" data-versionid="2" data-type="normal">29</span> <span className="dynamic-currency-sign">$</span>,- each</div>
            </div>
            {
                (addOn3 === false ? <div className="btn btn-lg upsell-add-button" onClick={() => addAddon(3)}>ADD <img alt= "" src={addImage}/></div> : 
                <div className="btn btn-lg upsell-remove-button" onClick={() => removeAddon(3)}>REMOVE  <i className='fas fa-times-circle red'></i></div>)
            }
            <div></div>
        </div>
    </div>
</div>
<div ref={myRef}></div>
</>
 
)
}


export default SetTwo;
