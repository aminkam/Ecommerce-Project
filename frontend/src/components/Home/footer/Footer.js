import React from "react";
import "./Footer.css";

import SocialsMobile from "./SocialFooter";

const Footer = () => {
  return (
    <footer>
      <h3 id="contact" className="contact-me">
        Need a website?
        <br />
        Contact me!
      </h3>
      <div className="socials-footer">
        <SocialsMobile />
      </div>
      <h5 className="footer-text">© Created by KAMMOUN Amin 2021</h5>
      <div className="backup-arrow animation"></div>
    </footer>
  );
};

export default Footer;
