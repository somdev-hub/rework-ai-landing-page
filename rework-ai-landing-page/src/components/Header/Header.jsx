import arrow from "../../assets/right.svg";
import header_img from "../../assets/header-img.png";
import clutch from "../../assets/clutch.png";
import star from "../../assets/star.svg";
import "./Header.css";
import recruiter1 from "../../assets/recruiters/Ellipse 761.svg";
import recruiter2 from "../../assets/recruiters/Ellipse 762.svg";
import recruiter3 from "../../assets/recruiters/Ellipse 763.svg";
import recruiter4 from "../../assets/recruiters/Ellipse 764.svg";
import recruiter5 from "../../assets/recruiters/Ellipse 765.svg";
import feature_img1 from "../../assets/feature-img/feature-img1.png";
import feature_img2 from "../../assets/feature-img/feature-img2.png";
import feature_img3 from "../../assets/feature-img/feature-img3.png";
import brand1 from "../../assets/brands/brand1.png";
import brand2 from "../../assets/brands/brand2.png";
import brand3 from "../../assets/brands/brand3.png";
import brand4 from "../../assets/brands/brand4.png";
import brand5 from "../../assets/brands/brand5.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="header-main">
        <div className="header-left">
          <div className="heading">
            <h1>it’s your turn to</h1>
            <h1>moonlight</h1>
          </div>
          <button className="getting-started" style={{ display: "flex" }}>
            get started{" "}
            <span style={{ display: "flex" }}>
              <img src={arrow} alt="" />
            </span>
          </button>
          <div
            className="review"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end"
            }}
          >
            <div className="reviews-head">
              <p>REVIEWED ON</p>
              <img src={clutch} alt="" />
            </div>
            <div className="reviews-stars">
              <div className="stars-container" style={{ display: "flex" }}>
                <span className="star">
                  <img src={star} alt="" />
                </span>
                <span className="star">
                  <img src={star} alt="" />
                </span>
                <span className="star">
                  <img src={star} alt="" />
                </span>
                <span className="star">
                  <img src={star} alt="" />
                </span>
                <span className="star">
                  <img src={star} alt="" />
                </span>
              </div>
              <p
                style={{ fontFamily: "Gilroy-Medium", fontSize: "1.07863rem" }}
              >
                4.7 RATING
              </p>
            </div>
          </div>
          <div className="recruiters">
            <p>Trusted by recruiters</p>
            <div
              className="recruiters-container"
              style={{ display: "flex", position: "relative", marginTop: "1%" }}
            >
              <div className="recruiter-content">
                <img src={recruiter5} alt="" />
              </div>
              <div className="recruiter-content">
                <img src={recruiter1} alt="" />
              </div>
              <div className="recruiter-content">
                <img src={recruiter2} alt="" />
              </div>
              <div className="recruiter-content">
                <img src={recruiter3} alt="" />
              </div>
              <div className="recruiter-content">
                <img src={recruiter4} alt="" />
              </div>
              <span className="more-recruiters">10K+</span>
            </div>
          </div>
        </div>
        <div className="header-right" style={{ position: "relative" }}>
          <div className="features feature1">
            <div className="feature-img">
              <img src={feature_img1} alt="" />
            </div>
            <div className="feature-text">
              <h3>AI-Powered Shortlisting</h3>
              <p>
                Save time spent in manually sourcing & screening candidates.
              </p>
            </div>
          </div>
          <div className="features feature2">
            <div className="feature-img">
              <img src={feature_img2} alt="" />
            </div>
            <div className="feature-text">
              <h3>Backed by Community</h3>
              <p>Build XL-sized pipelines of relevant candidates.</p>
            </div>
          </div>
          <div className="features feature3">
            <div className="feature-img">
              <img src={feature_img3} alt="" />
            </div>
            <div className="feature-text">
              <h3>Hassle-free Payouts</h3>
              <p>
                Eliminate hefty closure fees & expensive database subscriptions.
              </p>
            </div>
          </div>
          <img src={header_img} alt="" />
        </div>
      </div>
      <div className="brands">
        <p>Trusted by 1000+ brands including</p>
        <div className="brands-container">
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
