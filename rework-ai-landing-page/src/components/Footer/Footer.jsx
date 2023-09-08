import React from "react";
import "./Footer.css";
import logo2 from "../../assets/logo2.png";
import footer_img1 from "../../assets/footer-img1.png";
import g_cloud from "../../assets/g-cloud.png";
import jupiter from "../../assets/jupiter.png";
import slack from "../../assets/slack.png";
import zoom from "../../assets/zoom.png";
import stripe from "../../assets/stripe.png";
import linkedin from "../../assets/footer-icons/bi_linkedin.svg";
import youtube from "../../assets/footer-icons/mdi_youtube.svg";
import twitter from "../../assets/footer-icons/mdi_twitter.svg";
import insta from "../../assets/footer-icons/ri_instagram-fill.svg";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-main">
        <div className="footer-left">
          <img src={logo2} alt="" />
          <p>You do the pre-work We do the rework</p>
          <p>Come join us on a mission to change the hiring industry</p>
        </div>
        <div className="footer-right">
          <div className="col col1">
            <h3>Quick Links</h3>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Invest in us</li>
            </ul>
          </div>
          <div className="col col2">
            <h3>resources</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Data Protection</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="col col3">
            <p>For recruiters</p>
            <hr />
            <p>For employers</p>
            <div className="col3-secondary">
              <h3>Technology Partners</h3>
              <div className="companies-containers">
                <div className="grp1">
                  <img src={footer_img1} alt="" />
                  <img src={jupiter} alt="" />
                  <img src={g_cloud} alt="" />
                </div>
                <div className="grp2">
                  <img src={zoom} alt="" />
                  <img src={slack} alt="" />
                  <img src={stripe} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="social-icons">
          <img src={linkedin} alt="" />
          <img src={youtube} alt="" />
          <img src={twitter} alt="" />
          <img src={insta} alt="" />
        </div>
        <div className="copyright-p">
            <p>© 2023 Rework.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
