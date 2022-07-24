import React from "react";
import "../styles/footer.css";
import img from "../img/IMAGE.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="F-Wrapper">
      <div className="F-BLOCK">
        <div className="foo-box">
          <h6 className="footer-text">Contact Us</h6>
          <span className="email-foo">Email</span>
          <span className="sites">needhelp@organick.com</span>

          <span className="email-foo1">Phone</span>
          <span className="sites">123 (1254) 1452</span>

          <span className="email-foo2">Address</span>
          <span className="sites">88 Road, Brooklyn Street, USA</span>
        </div>
        <div className="big-box">
          <img className="foto" src={img} alt="" />
          <p className="footering">
            We are a popular and farming company aspiring to be a leader in the
            Organic food industry.
          </p>
          <div className="foo-icons">
            <div className="foo-circle">
              <FontAwesomeIcon
                className="tuz"
                icon={faFacebook}
              ></FontAwesomeIcon>
            </div>

            <div className="foo-circle">
              <FontAwesomeIcon  className="tuz" icon={faTwitter}></FontAwesomeIcon>
            </div>
            <div className="foo-circle">
              <FontAwesomeIcon  className="tuz" icon={faInstagram}></FontAwesomeIcon>
            </div>
            <div className="foo-circle">
              <FontAwesomeIcon  className="tuz" icon={faPinterest}></FontAwesomeIcon>
            </div>
          </div>
        </div>

        <div className="foo-box1">
            <h6 className="footer-text12">Utility Pages</h6>
            <ul>
                <li className="guids">Style Guide</li>
                <li className="guids">Protected</li>
                <li className="guids">Page Not Found</li>
                <li className="guids">Changelog</li>
               <li className="guids">Licenses</li>
            </ul>
        </div>
      </div>
    
      <div className="last-content">
        <span>Copyright © Organick | Designed by</span>
        <span>VictorFlow</span>
        <span>- Powered by</span>
        <span>Webflow</span>
      </div>
    
    </div>
  );
};

export default Footer;
