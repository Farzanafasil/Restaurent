import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">The Foodie</div>
          <div className="right"></div>
        </div>
        <div className="banner" style={{ display: "flex", justifyContent: "center"}} >
          <div className="center">
            <div className="social-icons">
              <a href="https://www.facebook.com/yourpage"><FaFacebook style={{ color: "#3b5998" }} /></a>
              <a href="https://twitter.com/youraccount"><FaTwitter style={{ color: "#1da1f2" }} /></a>
              <a href="https://www.instagram.com/youraccount"><FaInstagram style={{ color: "#c13584" }} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;