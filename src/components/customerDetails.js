import React,{useState} from "react";
import  "../design/style.css"
import "../design/bootstrap.min.css"
import secureLogo from "../images/secure-logos.png"


const CustomerInfo = () =>{
    let [details,setDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "us",
        address: "",
        state: "",
        city: "",
        zipCode: ""
    });
    
    
    const  inputHandler = (e,field) =>{
        let tDetails = details;
        if(field=== "firstName") tDetails.firstName = e.target.value;
        else if(field=== "lastName") tDetails.lastName = e.target.value;
        else if(field=== "email") tDetails.email = e.target.value;
        else if(field=== "country") tDetails.country = e.target.value;
        else if(field=== "address") tDetails.address = e.target.value;
        else if(field=== "state") tDetails.state = e.target.value;
        else if(field=== "city") tDetails.city = e.target.value;
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
    <option id="us_option_select" value="US">United States</option>
    <option id="uk_option_select" value="GB">United Kingdom</option>
    <option id="nl_option_select" value="NL">Netherlands</option>
    <option id="de_option_select" value="DE">Germany</option>
    <option id="be_option_select" value="BE">Belgium</option>
    <option id="fr_option_select" value="FR">France</option>
    <option id="es_option_select" value="ES">Spain</option>
    <option id="it_option_select" value="IT">Italy</option>
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
    <input id="submit-button" className="btn btn-lg white" type="button" onClick={() => displayInfo()} value="PROCEED TO PAYMENT" required/>
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

export default CustomerInfo;