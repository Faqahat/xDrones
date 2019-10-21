import React from "react"
import  "../design/style.css";
import "../design/bootstrap.min.css";
import {Link} from "gatsby";
import Layout from "../components/Layout";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-146793756-3');
ReactGA.pageview("/home");
//var visitor = ua('UA-146793756-3');
const Shipping = () => (
  <Layout>
      
      <div className="row sales" style={{padding: "40px"}}>
      <h1>SHIPPING METHODS &amp; DELIVERY TIME</h1><br />

<p>&nbsp;</p>
<br /><br /><br /><br />
<table className="table">
<tbody>
<tr>
<td>
<p>Shipping Method</p>
</td>
<td>
<p>Cost</p>
</td>
<td>
<p>HANDLE &amp; DELIVERY TIME</p>
</td>
</tr>
<tr>
<td>
<p>Shipping to US,CA,UK,EUR&nbsp;</p>
</td>
<td>
<p>FREE</p>
</td>
<td>
<p>7 -13 business days</p>
</td>
</tr>
<tr>
<td>
<p>Express Shipping to other country</p>
</td>
<td>
<p>$<span>&nbsp;</span>12.00</p>
</td>
<td>
<p>7 -10 business days</p>
</td>
</tr>
<tr>
<td>
<p>Shipping to other country</p>
</td>
<td>
<p>FREE</p>
</td>
<td>
<p>15-30 business days</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>Orders will be processed and shipped within 3 business days of ordering.</p>
<b>HOW DO I KNOW IF MY PACKAGE HAS SHIPPED AND IS ON ITS WAY?</b>
<p>Once you place an order, you will receive an automatic confirmation email. Once your order has been processed and is ready to leave our distribution center, you will receive another email with shipping information. Please note that the shipping confirmation email does not necessarily mean that the carrier has picked up your package from our distribution center. Please use the appropriate carriers tracking features to determine when your package has been picked up and is in transit.</p>
<p>Please allow up to 5 business days from the time you place your order for its status to update.</p>
DO YOU SHIP INTERNATIONALLY?
<p><span>Go Steel Kicks&nbsp;</span>is proud to serve our customers from all over the world! The default pricing on our site is in USD, the conversion rate depends on your issuing credit card company used on the transaction. The site will default US Dollars on the checkout page.</p>
<p>It usually takes 7-21 business days to arrive in your country, however, in some instances, the delivery may be delayed depending on your country's customs.<span>&nbsp;</span><span>Go Steel Kicks&nbsp;</span>is not responsible for applicable customs fees, import duties, taxes, or any other charges. The customer is responsible for the charges, even if the shipment is refused upon delivery</p>

<center><Link to="/"><button className="btn btn-lg btn-primary" style={{marginLeft: "400px", marginTop: "50px", marginBottom: "50px"}}> Back to Home Page</button></Link></center>
    </div>
  </Layout>

)

export default Shipping
