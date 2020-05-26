import React from "react";
import "./LeMaison.css";
import Layout from "./shared/Layout";

const LeMaison = (props) => {
  return (
    <Layout user={props.user}>
      <div className="lemaison">
        <a href="https://www.linkedin.com/in/jordania-pereyra/">
          <div className="jordania about-div">
            <img src="https://i.imgur.com/ambUW2d.jpg" alt="Jordania" />
            <div className="lemaison-caption">
              <h2>Jordania Pereyra</h2>
              <p>Fearless Designer</p>
              <p>Our Guiding Light</p>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/kaych26/">
          <div className="kay about-div">
            <img src="https://i.imgur.com/8gBDoF0.jpg" alt="Kay" />
            <div className="lemaison-caption">
              <h2>Kay Chan</h2>
              <p>The Architect</p>
              <p>Command Line Prophet</p>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jpmeyers/">
          <div className="jp about-div">
            <img src="https://i.imgur.com/QX5dlzf.jpg" alt="JP" />
            <div className="lemaison-caption">
              <h2>JP Meyers</h2>
              <p>Database Savant</p>
              <p>Cat Herder</p>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/scott-p-griffith/">
          <div className="scott about-div">
            <img src="https://i.imgur.com/Gcexxx3.jpg" alt="Scott" />
            <div className="lemaison-caption">
              <h2>Scott Griffith</h2>
              <p>Git Czar</p>
              <p>Occasional Comedian</p>
            </div>
          </div>
        </a>
      </div>
    </Layout>
  );
};

export default LeMaison;
