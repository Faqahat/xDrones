import React from "react"
//import { Link } from "gatsby"
import  "../design/style.css";
import "../design/bootstrap.min.css";
import Hero from "../components/Hero"
import Layout from "../components/Layout";
import ProductInfo from "../components/productInfo"
import DiscountBox from "../components/discountbox";
import StepOne from "../components/stepOne";
import RecentSales from "../components/recentSales";
import StockNotifications from "../components/stockNotification";
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
