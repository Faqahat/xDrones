import React from "react"
import  "../design/style.css";
import "../design/bootstrap.min.css";
import mainLogo from "../images/main_logo.png"
import {Link} from "gatsby";

 /*       <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146793756-2"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-146793756-2');
        </script>

*/
const Layout = (props) => (

<>
    <title>xDrones Pro - Promotion</title>
    <div className="grey">


      <div className="container ">

            <div className="row head text-center">
            <div className="product-logo col">
                <img id="product-logo-img" src={mainLogo} alt="xDrones Logo"/>
            </div>
            </div>

                {props.children}

        </div>
        <div className="container-fluid footer-container">
            <div className="row legal white">
            <div className="col">
            <div>
                <Link className="legal-link big-legal" to="/shipping">Shipping and returns</Link>
                <Link className="legal-link big-legal" to="/terms">Terms</Link>
                <Link className="legal-link big-legal" to="/privacy">Privacy Statement</Link>
            </div>
            <br/>
            <p>Copyrights 2019, xDrone Pro. All rights reserved</p>
            <div>
            <a className="legal-link big-legal" href="mailto:sales@xdrones.co">Contact</a>
            </div>
            </div>
            </div>
        </div>
        </div>
   </>
)
export default Layout;