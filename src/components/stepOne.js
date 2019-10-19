import React,{useState,useRef,useEffect} from "react";
import  "../design/style.css";
import "../design/bootstrap.min.css";
import Timer from "./timer"
import StepTwo from "../components/stepTwo";
import fetch from "node-fetch";
import Client from "shopify-buy";
import CustomerDetails from "../components/customerDetails";


const SetOne = () => {
    const client = Client.buildClient({
        domain: 'xdronespro.myshopify.com',
        storefrontAccessToken: '9607987e0513ca24237f22f5f6bda724'
      },fetch);


 const [Qty,setQty] = useState(0);

 let myRef = useRef()

 const StartSale = (quantity) =>{
      
    client.checkout.create().then((checkout) => {
        // Do something with the checkout
        console.log(checkout.id);
      });

 }
 const updateQuantity = (quantity) => {
    window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
    setQty(quantity);
    StartSale(1);

 }
 let CheckIcon = <i className='fas fa-check-square Check'></i>;

 function Step2() {
      if(Qty !== 0) 
      return(<><StepTwo Quantity={Qty}/>  <CustomerDetails /> </>);
      else return("");

  }

return (<>
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
    <tr className={  (Qty === 5 ? 'selected' : 'best-seller')} onClick={  () => {updateQuantity(5);}}>
    <td>
    <label></label>
    </td>
    <td>
    <label htmlFor="quantity-5">
    <div className="best-seller-text red">BEST SELLER!</div>
    <div className="package-name">
    Buy 3 DroneX Pro, GET 2 FREE
    <div className="inline-block">
    (<span className="dynamic-price-placeholder" data-versionid="5" data-type="divided" data-dividedby="5">64</span> <span className="dynamic-currency-sign">$</span>/each)
    </div> {(Qty === 5 ? CheckIcon : '')} 
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

    <tr className={ (Qty === 3 ? 'selected' : '')} onClick={  () => {updateQuantity(3);}}>
        <td>
           
            </td>
            <td>
            <label htmlFor="quantity-3">
            <div className="package-name">
            Buy 2 DroneX Pro, GET 1 FREE
            <div className="inline-block">
            (<span className="dynamic-price-placeholder" data-versionid="10" data-type="divided" data-dividedby="3">73</span> <span className="dynamic-currency-sign">$</span>/each)
                     
            </div>            {(Qty === 3 ? CheckIcon : "")} 
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
 
    <tr className={ (Qty === 1 ? "selected" : '')} onClick={  () => {updateQuantity(1);}}>
        <td>
           
            </td>
            <td>
            <label htmlFor="quantity-1">
            <div className="package-name">
            <b>1</b> DroneX Pro
            <div className="inline-block">
            (<span className="dynamic-price-placeholder" data-versionid="6" data-type="divided" data-dividedby="1">119</span> <span className="dynamic-currency-sign">$</span>/each)
            </div>{(Qty === 1 ? CheckIcon : '')} 
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
    <tr className={ (Qty === 2 ? 'selected' : '')} onClick={  () => {updateQuantity(2);}}>
        <td>

        </td>
        <td>
            <label htmlFor="quantity-2">
            <div className="package-name">
            <b>2</b> DroneX Pro
            <div className="inline-block">
            (<span className="dynamic-price-placeholder" data-versionid="7" data-type="divided" data-dividedby="2">85</span> <span className="dynamic-currency-sign">$</span>/each)
            </div>{(Qty === 2 ? CheckIcon : '')} 
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
    <tr className={ (Qty === 4 ? 'selected' : '')} onClick={  () => {updateQuantity(4);}}>
        <td>

            </td>
            <td>
            <label htmlFor="quantity-4">
            <div className="package-name">
            <b>4</b> DroneX Pro
            <div className="inline-block">
            (<span className="dynamic-price-placeholder" data-versionid="8" data-type="divided" data-dividedby="4">67</span> <span className="dynamic-currency-sign">$</span>/each)
            </div> {(Qty === 4 ? CheckIcon : '')} 
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
    <tr className={ (Qty === 10 ? 'selected' : '')} onClick={  () => {updateQuantity(10);}}>
        <td>

            </td>
            <td>
            <label htmlFor="quantity-10">
            <div className="package-name">
            <b>10</b> DroneX Pro
            <div className="inline-block">
            (<span className="dynamic-price-placeholder" data-versionid="9" data-type="divided" data-dividedby="10">59</span> <span className="dynamic-currency-sign">$</span>/each)
            </div> {(Qty === 10 ? CheckIcon : '')} 
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
</>
)
}

export default SetOne;
