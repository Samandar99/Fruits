import React from "react";
import "../styles/baner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Baner = () => {
  return (
    
      <div id="Baner" className="Baner1">
        <div className="B-leftWords">
          <i className="b-text">Made with nature</i>
          <h6 className="BS-text">Welcome to the</h6>
          <h6 className="BS-text">world of nature</h6>
          <h6 className="BS-text">and organic.</h6>
          <button type="button" className="b-btn">
            Explore Now
            <div className="b-circle">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="b-arrow"
              ></FontAwesomeIcon>
            </div>
          </button>
        </div>
      </div>
   
  );
};

export default Baner;
