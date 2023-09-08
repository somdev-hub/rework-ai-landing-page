import React from "react";
import "./AmazingFeatures.css";
import feature1_img from "../../assets/amazing-features/feature1-img.png";
import feature2_img from "../../assets/amazing-features/feature2-img.png";
import feature3_img from "../../assets/amazing-features/feature3-img.png";

const AmazingFeatures = () => {
  return (
    <section className="amazing-features">
      <h1>
        amazing <span className="highlight">features</span>
      </h1>
      <div className="amazing-features-cards">
        <div className="amazing-features-card">
          <img src={feature1_img} alt="" />
          <h3>Automated Sales</h3>
          <p>
            Providing you unlimited access to steady stream of jobs so that you
            can source more, to earn more.
          </p>
        </div>
        <div className="amazing-features-card">
          <img src={feature2_img} alt="" />
          <h3>Highest commission</h3>
          <p>
            Offering the top commission with no sales or admin work. Best
            benefits for the best resourcing efforts.
          </p>
        </div>
        <div className="amazing-features-card">
          <img src={feature3_img} alt="" />
          <h3>Community perks</h3>
          <p>
            With our community, you get to enjoy milestone based increment,
            insurance coverage, and free training programs
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmazingFeatures;
