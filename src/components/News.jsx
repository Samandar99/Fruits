import React from "react";
import "../styles/news.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  return (
    <div className="N-wrap">
      <div className="N-head">
        <i className="p-new">News</i>
        <div className="N-text">
          <p>Discover The recent content about organic products</p>
          <button className="N-btn">
            More News
            <div className="O-circle">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="O-arrow"
              ></FontAwesomeIcon>
            </div>
          </button>
        </div>
      </div>

      <div className="N-block">
        <div className="N-box">
          <div className="N-child">
            <FontAwesomeIcon icon={faUser} className="N-icon"></FontAwesomeIcon>
            <span className="Kris">Kristina Castle</span>
            <p className="N-words">Everything You Need to Know About </p>
            <p className="N-Many">
              Organic farming is the only way that you still can experience the
              real world.
            </p>
            <div className="N-footer">
              <p className="mores">View More</p>
              <div className="sosas">
                <div className="b-arrow">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="N-arrow"
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="N-box1">
          <div className="N-child">
            <FontAwesomeIcon icon={faUser} className="N-icon"></FontAwesomeIcon>
            <span className="Kris">Alex Louis</span>
            <p className="N-words">Organic Fruits: Surprising Benefits and </p>
            <p className="N-Many">
              The world of nature has grown on the principles of health,
              ecology, and care.
            </p>
            <div className="N-footer">
              <p className="mores">View More</p>
              <div className="sosas">
                <div className="b-arrow">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="N-arrow"
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
