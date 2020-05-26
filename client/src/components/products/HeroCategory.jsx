import React from "react";
import "./HeroCategory.css";

const HeroCategory = (props) => {
  return (
    <div className="rightTitlePosition">
      <img className="heroImgC" alt="" src={props.heroImg} />
      <div className="heroBlockC">
        <div className="heroTitleC">{props.heroTitle}</div>
      </div>
    </div>
  );
};

export default HeroCategory;
