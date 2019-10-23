import React,{useState,useRef,useContext} from "react"

import  "../design/style.css"
import "../design/bootstrap.min.css"
import addImage from "../images/add.svg"
import upSell1 from "../images/upsell_1.png"
import upSell2 from "../images/upsell_2.jpg"
import upSell3 from "../images/upsell_3.jpg"
//import Client from "shopify-buy";
import {CheckoutContext} from "./stepOne"
import ReactGA from 'react-ga';

import bEnd from '../axios';
import withLocation from "./withLocation"
import PropTypes from "prop-types"
ReactGA.initialize('UA-146793756-3');
// Drone ID : Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDg5NjU1NTY4Nzk4NQ==
// Cam Variant ID : Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA2MTk3NjExMw=
// Propeller ID : Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA2NjQ5ODA5Nw==
// Protective Bag  ID:  Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA3NDE5ODU3Nw==



const SetTwo = (props) => {
let myRef = useRef()
let [addOn1 , setAddOn1] = useState(false);
let [addOn2 , setAddOn2] = useState(false);
let [addOn3 , setAddOn3] = useState(false);
let [cartItems, setCartItems] =  useState({addon1 : null , addon2: null , addon3: null});
let [checkout] = useContext(CheckoutContext); 


    /*const client = Client.buildClient({
        domain: 'xDronespro.myshopify.com',
        storefrontAccessToken: '9607987e0513ca24237f22f5f6bda724'
      },fetch);*/
      


const removeAddon = (addon) => {

   
    if(addon === 1)      { 
        RemoveItem(cartItems.addon1);
        setAddOn1(false); 
    }
    else if(addon === 2)  
    { 
        RemoveItem(cartItems.addon2);
        setAddOn2(false); 
    }
    else if(addon === 3) { 
        RemoveItem(cartItems.addon3);
        setAddOn3(false); 
    }
    window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
    
}
const AddItem =  (item) =>{
    let variant_id = "";
    if(item === 1) variant_id = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA2MTk3NjExMw==";
    else if(item === 2) variant_id = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA2NjQ5ODA5Nw==";
    else if(item === 3) variant_id = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA3NDE5ODU3Nw==";
    if(item === 1) setAddOn1(true); 
    else if(item === 2) setAddOn2(true); 
    else if(item === 3) setAddOn3(true); 
    const lineItemsToAdd = [
      {
        variantId: variant_id,
        quantity: checkout.quantity
      }
    ];
    checkout.client.checkout.addLineItems(checkout.checkoutId, lineItemsToAdd).then((c) => {

      console.log("Added to Cart [Quantity :" + checkout.quantity + "]"  );
      let iIndex =  c.lineItems.findIndex(lineItem => lineItem.variant.id === variant_id);
      let cartItemsx = cartItems;
      if(item === 1) cartItemsx.addon1 = c.lineItems[iIndex].id;
      else if(item === 2) cartItemsx.addon2 = c.lineItems[iIndex].id;
      else if(item === 3) cartItemsx.addon3 = c.lineItems[iIndex].id;
      setCartItems(cartItemsx);
      let trackerc = props.search.t;
      if(trackerc == null) trackerc = "direct";
      bEnd.get(`/addAddon?tracker=${trackerc}&checkoutID=${checkout.checkoutId}&AddonID=${item}`, {}).then(r => { console.log(r.data+"3")})
      ReactGA.event({
        category: 'Cart_Flow',
        action: 'Added Addon Quantity:' + checkout.quantity +" Variant: "+ variant_id + " Cart ID: " + c.lineItems[iIndex].id 
      });
     // console.log(cartItems)
     
     window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
      }).catch(error => {
        ReactGA.exception({
          description: error,
          fatal: true
        });
        if(item === 1) setAddOn1(false); 
        else if(item === 2) setAddOn2(false); 
        else if(item === 3) setAddOn3(false); 
        console.log(error)
      
      });

}
const RemoveItem = (cartId) =>{


    const lineItemIdsToRemove = [cartId];
   // console.log(checkout)
    checkout.client.checkout.removeLineItems(checkout.checkoutId, lineItemIdsToRemove).then((checkout) => {
      console.log("Removed From Cart "  );
      let trackerc = props.search.t;
      if(trackerc == null) trackerc = "direct";
      bEnd.get(`/removeAddon?tracker=${trackerc}&checkoutID=${checkout.checkoutId}&AddonID=N/A`, {}).then(r => { console.log(r.data+"4r")})
      ReactGA.event({
        category: 'Cart_Flow',
        action: "Removed Addon Cart ID: "+ cartId
      });

      }).catch(error => {
        ReactGA.exception({
          description: error,
          fatal: true
        });
        console.log(error)
      
      });

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
                (addOn1 === false ? <div className="btn btn-lg upsell-add-button" onClick={() => AddItem(1)}>ADD <img alt= "" src={addImage}/></div> : 
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
                (addOn2 === false ? <div className="btn btn-lg upsell-add-button" onClick={() => AddItem(2)}>ADD <img alt= "" src={addImage}/></div> : 
                <div className="btn btn-lg upsell-remove-button" onClick={() => removeAddon(2)}>REMOVE  <i className='fas fa-times-circle red'></i></div>)
            }
            
            <div></div>
        </div>
    </div>
    <div ref={myRef}></div>
    <div className={"row upsell-row" + (addOn3 === true?" added-row":"")}>
        <div className="col-sm-4 img-col">
            <img alt= "" src={upSell3}/>
        </div>
        <div className="col-sm-8 text-col">
            <div className="upsell-name">xDrone Pro protective case</div>
            <div className="upsell-description">A waterproof, sturdy and compact case to carry your xDrone Pro while providing it maximum protection.</div>
            <div className="upsell-price">
            <div className="upsell-old-price"><span className="dynamic-price-placeholder" data-versionid="2" data-type="divided" data-dividedby="0.21">79</span> <span className="dynamic-currency-sign">$</span></div>
            <div className="upsell-new-price"> , Now only <span className="dynamic-price-placeholder" data-versionid="2" data-type="normal">29</span> <span className="dynamic-currency-sign">$</span>,- each</div>
            </div>
            {
                (addOn3 === false ? <div className="btn btn-lg upsell-add-button" onClick={() => AddItem(3)}>ADD <img alt= "" src={addImage}/></div> : 
                <div className="btn btn-lg upsell-remove-button" onClick={() => removeAddon(3)}>REMOVE  <i className='fas fa-times-circle red'></i></div>)
            }
            <div></div>
        </div>
    </div>
</div>

</>
 
)
}

SetTwo.propTypes = {
  search: PropTypes.object,
}


export default withLocation(SetTwo);
