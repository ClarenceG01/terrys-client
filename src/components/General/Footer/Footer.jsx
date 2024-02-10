import React from "react";
import "./footer.css";
import facebook from "../../../assets/f.svg";
import ig from "../../../assets/ig.svg";
import twitter from "../../../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <span>Terrys</span>
          <p>Elevate Your Scent, Embrace Your Essence</p>
          <div className="footer-logos">
            <img src={facebook} alt="fb logo" />
            <img src={ig} alt="ig logo" />
            <img src={twitter} alt="twitter logo" />
          </div>
        </div>
        <div className="footer-details">
          <ul>
            <span>Company</span>
            <li>About</li>
            <li>Contact us</li>
            <li>Careers</li>
          </ul>
          <ul>
            <span>Quick Link</span>
            <li>FAQs</li>
          </ul>
          <ul>
            <span>Legal</span>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
