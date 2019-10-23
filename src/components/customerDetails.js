import React,{useState,useContext} from "react";
import  "../design/style.css"
import "../design/bootstrap.min.css"
import secureLogo from "../images/secure-logos.png"
import {CheckoutContext} from "./stepOne"
import Swal from 'sweetalert2'
//import Client from "shopify-buy";
import ReactGA from 'react-ga';
import withLocation from "./withLocation"
import PropTypes from "prop-types"
import bEnd from '../axios';
ReactGA.initialize('UA-146793756-3');
const CustomerInfo = (props) =>{
    
    let [details,setDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "Unites States",
        address: "",
        state: "",
        city: "",
        phone: "",
        zipCode: ""
    });
  let [checkout] = useContext(CheckoutContext); 
    const Proceed = () =>{
        Swal.fire({
            title: 'Checking Stock',
            text: "Please Wait.",
            type: 'info',
            showConfirmButton: false,
          })
        checkout.client.checkout.updateEmail(checkout.checkoutId, details.email).then(() => {

          

        const shippingAddress = {
            address1: details.address,
            address2: null,
            city: details.city,
            company: null,
            country: details.country,
            firstName: details.firstName,
            lastName: details.lastName,
            phone: details.phone,
            province: details.state,
            zip: details.zipCode
        };

       checkout.client.checkout.updateShippingAddress(checkout.checkoutId, shippingAddress).then(c => {
        console.log(c)
        let trackerc = props.search.t;
        if(trackerc == null) trackerc = "direct";
        bEnd.get(`/checkout?tracker=${trackerc}&checkoutID=${checkout.checkoutId}&quantity=${checkout.quantity}&fullName=${details.firstName} ${details.lastName} &email=${details.email}&country=${details.country}&street=${details.address}&phone=${details.phone}&city=${details.city}&state=${details.state}&zip=${details.zipCode}&weburl=${c.webUrl}`, {}).then(r => { console.log(r.data+"5")})
        window.location.assign(c.webUrl);
        Swal.fire({
            title: 'Congratulation!',
            text: "Your discount has been applied.",
            type: 'success',
            showConfirmButton: false,
          })
          ReactGA.event({
            category: 'Cart_Flow',
            action: 'Checking Out | User Info:'  + details.firstName + details.lastName + " " + details.state
          });

       }).catch(error => {
        ReactGA.exception({
          description: error,
          fatal: true
        });
        console.log(error)
      
      });
    });
      }
    const  inputHandler = (e,field) =>{
        let tDetails = details;
        if(field=== "firstName") tDetails.firstName = e.target.value;
        else if(field=== "lastName") tDetails.lastName = e.target.value;
        else if(field=== "email") tDetails.email = e.target.value;
        else if(field=== "country") tDetails.country = e.target.value;
        else if(field=== "address") tDetails.address = e.target.value;
        else if(field=== "state") tDetails.state = e.target.value;
        else if(field=== "city") tDetails.city = e.target.value;
        else if(field=== "phone") tDetails.phone = e.target.value;
        else if(field=== "zipCode") tDetails.zipCode = e.target.value;
        setDetails(tDetails);
    
    }
    
    const displayInfo = () => {
    return console.log(details)
    
    }
return(<>
    <div className="warranty col-xs-12"></div>
    <div id="step-3-section" className="">
    <div className="step-3-head col-xs-12 step-header white" id="step-3-head">STEP #3: YOUR DETAILS</div>
    <div className="order-form-container">
    <div className="customer-details col-xs-12">
    <form id="orderForm">
    <h3 className="order-form-head">Customer details</h3>
    <div className="row form-row">
    <div className="col-md-6">
    <input id="first-name-input" className="input" type="text" name="firstname" placeholder="First name" onChange={(event) => inputHandler(event,"firstName")} required/>
    </div>
    <div className="col-md-6">
    <input id="last-name-input" className="input" type="text" name="lastname" placeholder="Last name"  onChange={(event) => inputHandler(event,"lastName")} required/>
    </div>
    </div>
    <div className="row form-row">
    <div className="col-12">
    <input id="email-input" className="input" type="email" name="email" placeholder="E-mail Adress"  onChange={(event) => inputHandler(event,"email")}required/>
    </div>
    </div>
    <h3 className="order-form-head">Shipping address</h3>
    <div className="row form-row">
    <div className="col">
    <label htmlFor="country-input">Country</label>
    <select id="country-input" className="input-medium form-control"   onChange={(event) => inputHandler(event,"country")} required>
    <option id="us_option_select" value="United States">United States</option>
    <option id="uk_option_select" value="United Kingdom">United Kingdom</option>
    <option id="nl_option_select" value="Netherlands">Netherlands</option>
    <option id="de_option_select" value="Germany">Germany</option>
    <option id="be_option_select" value="Belgium">Belgium</option>
    <option id="fr_option_select" value="France">France</option>
    <option id="es_option_select" value="Spain">Spain</option>
    <option id="it_option_select" value="Italy">Italy</option>
    </select>
    </div>
    </div>
    <div className="row form-row">
    <div className="col-12">
    <input id="street-input" className="input" type="text" name="street" placeholder="Street " onChange={(event) => inputHandler(event,"address")} required />
    </div>
    </div>

    <div className="row form-row">
    <div className="col-12">
    <input id="phone-input" className="input" type="text" name="phonenum" placeholder="Phone Number" onChange={(event) => inputHandler(event,"phone")} required/>
    </div>
    </div>

    <div className="row form-row">
    <div className="col-12">
    <input id="city-input" className="input" type="text" name="city" placeholder="City" onChange={(event) => inputHandler(event,"city")} required/>
    </div>
    </div>
    <div className="row form-row">
    <div className="col-md-6">
    <input id="state-input" className="input" type="text" name="state" placeholder="State"  onChange={(event) => inputHandler(event,"state")} required/>
    </div>
    <div className="col-md-6">
    <input id="zip-input" className="input" type="text" name="zip" placeholder="Zip/Postal code"  onChange={(event) => inputHandler(event,"zipCode")} required/>
    </div>
    </div>
    <div className="row form-row">
    <div className="col">
    <input id="submit-button" className="btn btn-lg white" type="button" onClick={() => {displayInfo(); Proceed()}} value="PROCEED TO PAYMENT" required/>
    </div>
    </div>
    </form>
    </div>
    </div>
    <div className="col-xs-12 security-checks">
    <div><i className="fas fa-lock orange"></i>Secure 256-Bit SSL connection</div>
    <div><img src={secureLogo} alt=""/></div>
    </div>
    </div>
</>)
}



CustomerInfo.propTypes = {
  search: PropTypes.object,
}


export default withLocation(CustomerInfo);