import React from "react"
import  "../design/style.css";
import "../design/bootstrap.min.css";
import Hero from "../components/Hero"
import Layout from "../components/Layout";
import ProductInfo from "../components/productInfo"
import DiscountBox from "../components/discountbox";
import StepOne from "../components/stepOne";
import RecentSales from "../components/recentSales"; // Popup
import StockNotifications from "../components/stockNotification"; // Popup
import ReactGA from 'react-ga';
ReactGA.initialize('UA-146793756-3');
ReactGA.pageview("/home");
//var visitor = ua('UA-146793756-3');
const IndexPage = () => (
  <Layout>
    <StockNotifications/>
    <Hero />
    <ProductInfo />
    <DiscountBox />
    <StepOne />
    <RecentSales />
  </Layout>

)

export default IndexPage
