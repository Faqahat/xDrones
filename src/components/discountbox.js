import React from 'react';
import  "../design/style.css";
import "../design/bootstrap.min.css";
import "../design/all.css";

const discountBox = () => (
<>
    <div className="row offer-shipping" id="offer-shipping">
    <div className="offer col-md-7 white" id="special-offer">
        <div id="special-offer-title">SPECIAL OFFER:</div>
        <div id="special-offer-text"><del><span className="dynamic-price-placeholder" data-versionid="6" data-type="divided" data-dividedby="0.5">198</span> <span className="dynamic-currency-sign">$</span></del> <span className="dynamic-price-placeholder" data-versionid="6" data-type="normal">99</span> <span className="dynamic-currency-sign">$</span>* (<b>50% Discount</b> Per Unit)</div>
        <div id="special-offer-note"><i>*Subject to availability in stock</i></div>
    </div>
    <div className="shipping col-md-5 white" id="delivery-offer">
        <div id="delivery-offer-left">
            <i className="fas fa-truck fa-flip-horizontal"></i>
        </div>
        <div id="delivery-offer-right">
            <b>FREE DELIVERY</b>
            ON EVERY ORDER TODAY!
        </div>
    </div>
    </div>
    <div className="row discount white">
    <div className="discount-bubble col-md-3" id="discount-bubble">
        <div>
            -50%
        </div>
    </div>
    <div className="discount-text col-md-9">
    <div className="row">
        <div className="col-lg-6 discount-applied-col">
        <div id="discount-applied-text">
            <div>Your <b>50%</b> Discount Code has been applied</div>
            <div className="small">Do not browse away from this page!</div>
            </div>
            </div>
            <div className="col-lg-6 discount-applied-col">
            <div id="free-delivery-button" className="freeshipping" >
                <span><i className="fas fa-truck" ></i>&nbsp;&nbsp;&nbsp;FREE DELIVERY AVAILABLE TODAY!</span>
            </div>
        </div>
    </div>
    </div>
    
    </div>

 
</>
)


export default discountBox;