import React from "react";
import "./Home.css";
import Layout from "./shared/Layout";
import Products from "./Products";
import Hero from "./products/Hero";
import featuredDividerImg from "../Images/FeatureDivImg.jpeg";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <Hero
        heroImg="https://i.imgur.com/AKdJFKV.jpg"
        heroTitle="Mothers Day Sale"
        heroTitle2="Give your Rock a Diamond"
        cName="leftTitlePosition"
      />
      {/* Section under the hero */}
      <div className="gridHeadingDivider">
        <div className="textDivider">Ultimate Elegance</div>
        <span className="textDividertag">Best Sellers</span>
      </div>

      <div className="featured-products-grid">
        <Products jCollection="women" featured={true} />
      </div>

      <div className="featuredDivider">
        <div className="featuredDividerdiv">Quarantine... Where she going?</div>
        <span className="featuredDividertag">Instagram!</span>
      </div>

      <img className="quarantine-img" src={featuredDividerImg} />
      <div className="blueSection">
        <div className="blueSection-head">
          GLOW UP DURING QUARANTINE
          <div />
          <div className="blueSection-text">
            Want to glow-up? You’ve come to the right place. <br />
            Even the most ordinary morning can be elevated with the addition of
            statement jewelry. Start with these feautured rings, then add
            delicate diamond bands for an unexpected contrast. Now, that’s what
            we call staying in.
          </div>
        </div>
      </div>
      <div className="quarantineSection">
        <div className="quarantineSection-text">
          Quarantine Engagement
          <br /> Rings That Prove <br />
          Love Always Wins!
        </div>
      </div>

      <div className="engagement-section">
        <Products jCollection="engagement" featured={true} />
      </div>
    </Layout>
  );
};

export default Home;
