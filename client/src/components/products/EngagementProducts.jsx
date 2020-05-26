import React from "react";
// import "./EngagementProducts.css";
import Layout from "../shared/Layout";
import Products from "../Products";
import HeroCategory from "./HeroCategory";

const EngagementProducts = (props) => {
  return (
    <Layout user={props.user}>
      <HeroCategory
        heroImg="https://i.imgur.com/3ISP0Nr.jpg"
        heroTitle="Engagement"
      />
      <Products jCollection="engagement" user={props.user} />
    </Layout>
  );
};

export default EngagementProducts;
