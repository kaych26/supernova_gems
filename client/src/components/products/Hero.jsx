import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className={props.cName}>
      <div className="heroSection-leftTitlePosition">
        <img className="heroImg" alt="" src={props.heroImg} />
        <div className="heroBlock">
          <div className="heroTitle">{props.heroTitle}</div>
          <div className="heroTitle2">{props.heroTitle2}</div>
          {/* <div className="heroSectionUnderline"></div> */}
          {/* <div className="heroOutline"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
