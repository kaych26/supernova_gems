import React from "react";
// import "./WomensProducts.css";
import Layout from "../shared/Layout";
import Products from "../Products";
import HeroCategory from "./HeroCategory";

const WomensProducts = (props) => {
  return (
    <Layout user={props.user}>
      <HeroCategory
        heroImg="https://i.imgur.com/WefJFor.jpg"
        heroTitle="Women"
      />
      <Products jCollection="women" user={props.user} />
    </Layout>
  );
};

export default WomensProducts;

