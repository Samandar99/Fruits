import React from "react";
import "../styles/email.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Email = () => {
  return (
    <div className="E-Wrap">
      <div className="EmailFoto">
        <div className="E-box">
          <div className="E-left">
            <p>Subscribe our</p>
            <p>Newsletter</p>
          </div>

          <div className="E-right">
            <input
              placeholder="Enter your email address"
              className="E-input"
              type="text"
            />
            <button className="E-btn">
              <div className="Fat">
                Subscribe
                <div className="E-circle">
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
