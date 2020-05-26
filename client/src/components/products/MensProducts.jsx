import React from "react";
// import "./MensProducts.css";
import Layout from "../shared/Layout";
import Products from "../Products";
import HeroCategory from "./HeroCategory";

const MensProducts = (props) => {
  return (
    <Layout user={props.user}>
      <HeroCategory
        heroImg="https://i.imgur.com/8sRhFF5.jpg"
        heroTitle="Mens Collection"
      />
      <Products jCollection="men" user={props.user} />
    </Layout>
  );
};

export default MensProducts;
