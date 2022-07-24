import React from "react";
import "../styles/garden.css";

const Garden = () => {
  return (
    <div id="Garden" className="G-wrap">
      <div className="G-block">
        <div className="G-img1">
          <div className="G-word">
            <i className="G-nat">Natural!!</i>
            <span className="Get">Get Garden</span>
            <span className="Get">Fresh Fruits</span>
          </div>
        </div>
        <div className="G-img">
          <div className="G-word1">
            <i className="G-Offer">Offer!!</i>
            <span className="G-off">Get 10% off</span>
            <span className="G-off">on Vegetables</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garden;
