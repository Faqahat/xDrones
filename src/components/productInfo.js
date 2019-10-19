import React from "react";
import ProductImage from "../images/product.jpg"
import  "../design/style.css";
import "../design/bootstrap.min.css";
import "../design/all.css";
const ProductInfo = () => (

    <div className="row info">
        <div className="product-image-big col-md-12 col-lg-6" id="product-image-big">
            <img id="product-logo-img" src={ProductImage} alt="xDrone Pro"/>
        </div>
            <div className="tech-specs col-md-12 col-lg-6">
                <div className="row">
                <div className="col-md-6 info-box-container white">
                <div className="info-box">
                    <i className="fas fa-rocket"></i>
                    Precision Flight Performance Technology
                    </div>
                </div>
                <div className="col-md-6 info-box-container white">
                <div className="info-box">
                    <i className="fas fa-camera"></i>
                    Ultra-Wide Camera Angle
                    </div>
                </div>
                <div className="col-md-6 info-box-container white">
                <div className="info-box">
                    <i className="fas fa-globe"></i>
                    See The World & Shoot Like A Pro
                    </div>
                </div>
                <div className="col-md-6 info-box-container white">
                <div className="info-box">
                    <i className="fas fa-child"></i>
                    Finely Tuned Control, At Your Command
                    </div>
                </div>
                <div className="col-md-6 info-box-container white">
                <div className="info-box">
                    <i className="fas fa-cogs"></i>
                    3 Speed Mode
                    </div>
                </div>
                <div className="col-md-6 info-box-container white">
                <div className="info-box">
                    <i className="fas fa-road"></i>
                    Portable, Follow You On Travels
                </div>
                </div>
            </div>
        </div>
    </div>
)

export default ProductInfo;