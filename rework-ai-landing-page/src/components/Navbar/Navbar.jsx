import "./Navbar.css";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/hamburger.svg";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const navbarLinks = [
    "Talent Finder",
    "Reinsure",
    "For Recruiters",
    "For Employers",
    "Our Team"
  ];

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div
        className="navbar-links"
        style={
          window.innerWidth < 430
            ? { display: clicked ? "flex" : "none" }
            : { display: "flex" }
        }
      >
        <div className="navbar-list">
          <ul>
            {navbarLinks.map((link, index) => {
              return <li key={index}>{link}</li>;
            })}
            <span className="new-tag">NEW</span>
            <span className="new-tag">NEW</span>
            <li>
              <button className="navbar-button sign-in">Sign In</button>
            </li>
            <li>
              <button className="navbar-button sign-up">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
      <img
        src={hamburger}
        alt=""
        className="hamburger"
        onClick={() => {
          setClicked(!clicked);
        }}
      />
    </div>
  );
};

export default Navbar;
