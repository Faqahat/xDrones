import React from "react"
import  "../design/style.css";
import "../design/bootstrap.min.css";
import mainLogo from "../images/main_logo.png"
const Layout = (props) => (

<>

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
            <a className="legal-link big-legal" href="/shipping">Shipping and returns</a>
            <a className="legal-link big-legal" href="/shipping">Terms</a>
            <a className="legal-link big-legal" href="/shipping">Privacy Statement</a>
            </div>
            <br/>
            <p>Copyrights 2019, DroneX Pro. All rights reserved</p>
            <div>
            <a className="legal-link" href="/shipping">About us</a>
            <a className="legal-link" href="/shipping">Contact</a>
            <a className="legal-link" href="/shipping">Affiliates</a>
            </div>
            </div>
            </div>
        </div>
        </div>
   </>
)
export default Layout;