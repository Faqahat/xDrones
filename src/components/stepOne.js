import React,{useState,useRef} from "react";
import  "../design/style.css";
import "../design/bootstrap.min.css";
import Timer from "./timer"
import StepTwo from "../components/stepTwo"
import fetch from "node-fetch"
import Client from "shopify-buy"
import cart from "../images/cart.png"
import CustomerDetails from "../components/customerDetails"
import withLocation from "./withLocation"
import PropTypes from "prop-types"
import ReactGA from 'react-ga';
import bEnd from '../axios';

ReactGA.initialize('UA-146793756-3');

// Drone ID : Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDg5NjU1NTY4Nzk4NQ==
// Cam Variant ID : Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA2MTk3NjExMw=
// Propeller ID : Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA2NjQ5ODA5Nw==
// Protective Bag  ID:  Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkwMTA3NDE5ODU3Nw==

export const CheckoutContext = React.createContext("null");

const SetOne = (props) => {
   let trackerc = props.search.t;
   if(trackerc == null) trackerc = "direct";
   bEnd.get(`/pageview?tracker=${trackerc}&page=Home`, {}).then(r => { console.log(r.data+"1")})
    const client = Client.buildClient({
        domain: 'xDronespro.myshopify.com',
        storefrontAccessToken: '9607987e0513ca24237f22f5f6bda724'
      },fetch);

 const [checkout,setCheckOut] = useState({
   quantity : 0
 });


 let myRef = useRef()

 const StartSale = (quantity) =>{


    client.checkout.create().then((checkout) => {
        setCheckOut({checkoutId : checkout.id, quantity: quantity, client: client});
        AddItem(checkout.id,"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDg5NjU1NTY4Nzk4NQ==",quantity,props.search.t);
        bEnd.get(`/initiateCart?tracker=${props.search.t}&checkoutID=${checkout.id}&quantity=${quantity}`, {}).then(r => { console.log(r.data+"2")})
      }).catch(error => bEnd.get(`/initiateCart?tracker=${props.search.t}&checkoutID=Error ${error}&quantity=${quantity}`, {}).then(r => { console.log(r.data+"2 ERROR")}));

      

  /*    
      const productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQyODkzMzI4NzEyMTc=';

        client.product.fetch(productId).then((product) => {
        console.log(product.variants[0].id);
        });
        
     client.product.fetchAll().then((products) => {
        // Do something with the products
        console.log(products);
      });*/
 }

 const AddItem = (cart,variant_ID,quant,tracker) =>{
      if(tracker == null) tracker = "direct";
      const lineItemsToAdd = [
        {
          variantId: variant_ID,
          quantity: quant,
          customAttributes: [{key: "note", value: tracker}]
        }
      ];
        client.checkout.addLineItems(cart, lineItemsToAdd).then((checkout) => {
        console.log("Added to Cart xDrone [Quantity :" + quant + "]"  );
        if(quant === 2) client.checkout.addDiscount(cart, "Bundle_2").then(() => {console.log("Discount Applied");});
        else if(quant === 3) client.checkout.addDiscount(cart, "Bundle_3").then(() => {console.log("Discount Applied"); });
        else if(quant === 4) client.checkout.addDiscount(cart, "Bundle_4").then(() => {console.log("Discount Applied");});
        else if(quant === 5) client.checkout.addDiscount(cart, "Bundle_5").then(() => {console.log("Discount Applied"); });
        else if(quant === 10) client.checkout.addDiscount(cart, "Bundle_10").then(() => {console.log("Discount Applied"); });
       // console.log(checkout)

       ReactGA.event({
        category: 'Cart_Flow',
        action: 'Selected Product Quantity:' + quant +" Tracker : " + tracker
      });

      }).catch(error => {
        ReactGA.exception({
          description: error,
          fatal: true
        });
        console.log(error)
        bEnd.get(`/initiateCart?tracker=${props.search.t}&checkoutID=variant: ${variant_ID} ERROR: ${error}&quantity=${quant}`, {}).then(r => { console.log(r.data+"2.5 ERROR")})
      
      });
       
 }
 const updateQuantity =  (quantity) => {

    let checkoutX = checkout;
    checkoutX.quantity = quantity;
    setCheckOut(checkoutX);
    setTimeout(()=>{
      window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
    },1500)
    StartSale(quantity);
    

 }
 let CheckIcon = <i className='fas fa-check-square Check'></i>;
 let CartIcon = <div style={ {marginLeft : 24}}><button className="btn btn-md " style={{borderRadius : 100 , backgroundColor: "#f7f7f7" ,borderColor: "#26b99a", borderWidth: 2 }}><img src={cart} alt ="" /></button></div>;
 
 
 function Step2() {
      if(checkout.quantity !== 0) 
      return(<><StepTwo/>  <CustomerDetails /> </>);
      else return("");

  }

return (
<CheckoutContext.Provider value={[checkout,setCheckOut]}>

<div className="row sales">

    <div className="step-1-head col-xs-12 step-header white">STEP #1 : SELECT QUANTITY</div>
    <div className="table col-xs-12">
    <div id="discount-timer">
        <div id="discount-timer-header">Your 50% discount expires in:</div>
        <div id="discount-timer-footer">
        <div  id="timer-bubble">
        <div>
        <Timer />
        </div>
    </div></div>
    </div>
    
    <table className="sales-table">
      <thead>
        <tr>
          <th colSpan="2"></th>
          <th className="sales-table-price-col">TOTAL PRICE</th>
          <th className="hidden-xs hidden-sm"></th>
        </tr>
      </thead>
    
    <tbody>
    <tr className={  (checkout.quantity === 5 ? 'selected' : 'best-seller')} onClick={  () => {updateQuantity(5);}}>
    <td>
    <label></label>
    </td>
    <td>
    <label htmlFor="quantity-5">
    <div className="best-seller-text red">BEST SELLER!</div>
    <div className="package-name">
    Buy 3 xDrone Pro, GET 2 FREE
    <div className="inline-block">
    (<span className="dynamic-price-placeholder" data-versionid="5" data-type="divided" data-dividedby="5">64</span> <span className="dynamic-currency-sign">$</span>/each)
    </div> {(checkout.quantity === 5 ? CheckIcon : CartIcon)} 
    </div>
    </label>
    </td>
    <td className="sales-table-price-col">
    <span>
    <span className="old-price"><span className="dynamic-price-placeholder" data-versionid="2" data-type="divided" data-dividedby="0.21">595</span> <span className="dynamic-currency-sign">$</span></span>
    <span className="new-price"><span className="dynamic-price-placeholder" data-versionid="5" data-type="normal">319</span> <span className="dynamic-currency-sign">$</span></span>
    </span>
    </td>
    <td className="hidden-xs hidden-sm">
    </td>
    </tr>

    <tr className={ (checkout.quantity === 3 ? 'selected' : '')} onClick={  () => {updateQuantity(3);}}>
        <td>
           
            </td>
            <td>
            <label htmlFor="quantity-3">
            <div className="package-name">
            Buy 2 xDrone Pro, GET 1 FREE
            <div className="inline-block">
            (<span className="dynamic-price-placeholder" data-versionid="10" data-type="divided" data-dividedby="3">73</span> <span className="dynamic-currency-sign">$</span>/each)
                     
            </div>            {(checkout.quantity === 3 ? CheckIcon : CartIcon)} 
            </div>
            </label>
            </td>
            <td className="sales-table-price-col">
            <span>
            
            <span className="old-price"><span className="dynamic-price-placeholder" data-versionid="2" data-type="divided" data-dividedby="0.21">357</span> <span className="dynamic-currency-sign">$</span></span>
            <span className="new-price"><span className="dynamic-price-placeholder" data-versionid="10" data-type="normal">219</span> <span className="dynamic-currency-sign">$</span></span>
            </span>
            </td>
            <td className="hidden-xs hidden-sm">
        </td>
    </tr>
 
    <tr className={ (checkout.quantity === 1 ? "selected" : '')} onClick={  () => {updateQuantity(1);}}>
        <td>
           
            </td>
            <td>
            <label htmlFor="quantity-1">
            <div className="package-name">
            <b>1</b> xDrone Pro
            <div className="inline-block">
            (<span className="dynamic-price-placeholder" data-versionid="6" data-type="divided" data-dividedby="1">119</span> <span className="dynamic-currency-sign">$</span>/each)
            </div>{(checkout.quantity === 1 ? CheckIcon : CartIcon)} 
            </div>
            </label>
            </td>
            <td className="sales-table-price-col">
            <span>
            
            <span className="old-price"><span className="dynamic-price-placeholder" data-versionid="2" data-type="divided" data-dividedby="0.21">250</span> <span className="dynamic-currency-sign">$</span></span>
            <span className="new-price"><span className="dynamic-price-placeholder" data-versionid="6" data-type="normal">119</span> <span className="dynamic-currency-sign">$</span></span>
           
            </span>
            </td>
            <td className="hidden-xs hidden-sm">
        </td>
    </tr>
    <tr className={ (checkout.quantity === 2 ? 'selected' : '')} onClick={  () => {updateQuantity(2);}}>
        <td>

        </td>
        <td>
            <label htmlFor="quantity-2">
            <div className="package-name">
            <b>2</b> xDrone Pro
            <div className="inline-block">
            (<span className="dynamic-price-placeholder" data-versionid="7" data-type="divided" data-dividedby="2">85</span> <span className="dynamic-currency-sign">$</span>/each)
            </div>{(checkout.quantity === 2 ? CheckIcon : CartIcon)} 
            </div>
            </label>
            </td>
            <td className="sales-table-price-col">
            <span>
            <span className="old-price"><span className="dynamic-price-placeholder" data-versionid="2" data-type="divided" data-dividedby="0.21">238</span> <span className="dynamic-currency-sign">$</span></span>
            <span className="new-price"><span className="dynamic-price-placeholder" data-versionid="7" data-type="normal">169</span> <span className="dynamic-currency-sign">$</span></span>
            </span>
        </td>
        <td className="hidden-xs hidden-sm">
        </td>
    </tr>
    <tr className={ (checkout.quantity === 4 ? 'selected' : '')} onClick={  () => {updateQuantity(4);}}>
        <td>

            </td>
            <td>
            <label htmlFor="quantity-4">
            <div className="package-name">
            <b>4</b> xDrone Pro
            <div className="inline-block">
            (<span className="dynamic-price-placeholder" data-versionid="8" data-type="divided" data-dividedby="4">67</span> <span className="dynamic-currency-sign">$</span>/each)
            </div> {(checkout.quantity === 4 ? CheckIcon : CartIcon)} 
            </div>
            </label>
            </td>
            <td className="sales-table-price-col">
            <span>
            <span className="old-price"><span className="dynamic-price-placeholder" data-versionid="2" data-type="divided" data-dividedby="0.21">476</span> <span className="dynamic-currency-sign">$</span></span>
            <span className="new-price"> <span className="dynamic-price-placeholder" data-versionid="8" data-type="normal">269</span> <span className="dynamic-currency-sign">$</span></span>
            </span>
            </td>
            <td className="hidden-xs hidden-sm">
            </td>
    </tr>
    <tr className={ (checkout.quantity === 10 ? 'selected' : '')} onClick={  () => {updateQuantity(10);}}>
        <td>

            </td>
            <td>
            <label htmlFor="quantity-10">
            <div className="package-name">
            <b>10</b> xDrone Pro
            <div className="inline-block">
            (<span className="dynamic-price-placeholder" data-versionid="9" data-type="divided" data-dividedby="10">59</span> <span className="dynamic-currency-sign">$</span>/each)
            </div> {(checkout.quantity === 10 ? CheckIcon : CartIcon)} 
            </div>
            </label>
            </td>
            <td className="sales-table-price-col">

            <span>
            <span className="old-price"><span className="dynamic-price-placeholder" data-versionid="2" data-type="divided" data-dividedby="0.21">1,190</span> <span className="dynamic-currency-sign">$</span></span>
            <span className="new-price"> <span className="dynamic-price-placeholder" data-versionid="9" data-type="normal">599</span> <span className="dynamic-currency-sign">$</span></span>
            </span>
            </td>
            <td className="hidden-xs hidden-sm">
        </td>
    </tr>


    </tbody>
    <tfoot>
        <tr>
        <td></td>
        <td></td>
        <td className="sales-table-price-col"></td>
        <td className="sales-table-end-col hidden-xs hidden-sm"></td>
        </tr>
    </tfoot>

    </table>
    </div>
    </div>
  
    <div ref={myRef}><Step2 /></div>

</CheckoutContext.Provider>
)
}
SetOne.propTypes = {
  search: PropTypes.object,
}


export default withLocation(SetOne);