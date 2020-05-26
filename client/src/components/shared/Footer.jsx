import React from "react";
import "./Footer.css";
import IGlogo from "../../Images/instagramWhite.png";
import Twitterlogo from "../../Images/Twitterlogo.png";
import Facebooklogo from "../../Images/Facebooklogo.png";

const Footer = () => (
  <div className="footer">
    <div className="privacy">Privacy</div>

    <div className="footerlinks">
      <a href="#">Shop</a>
      <a href="#">Blog</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>

    <div className="footerImglinks">
      <img src={IGlogo} alt="IG-Logo" />
      <img src={Twitterlogo} alt="Twitter-Logo" />
      <img src={Facebooklogo} alt="Facebook-Logo" />
    </div>
  </div>
);

export default Footer;
