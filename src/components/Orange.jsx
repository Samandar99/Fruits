import React from "react";
import "../styles/Orange.css";
import Oranges from "../img/Vector.png";
import Vector from "../img/Vector2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { OrangeText } from "../info/OrangeText";
import { posts } from "../info/OrangeInfo";

export const Orange = () => {
  const blogpost = posts.map((item) => {
    return (
      
      <OrangeText 
       key={item.id}
       text={item.text}
      
      />
  
    )
  });

  return (
    <div className="O-wrap">
      <div className="O-left">
        <div className="O-img"></div>
      </div>
      <div className="O-right">
        <i className="O-about__text">About Us</i>
        <h6 className="We">We Believe in Organic</h6>
        <h6 className="We">Foods For Strong Health</h6>
         {blogpost}
        <div className="O-blog">
          <div className="O-Orange">
            <img src={Oranges} alt="" />
          </div>
          <div className="O-blogRight">
            <h6 className="food-text">Organic Foods Only</h6>
            <p className="O-pages">
              The Product that you ordered will be verified that we have or not
              if have we will start to move on with the next step.
            </p>
          </div>
        </div>
        <div className="O-blog">
          <div className="O-Orange">
            <img src={Vector} alt="" />
          </div>
          <div className="O-blogRight">
            <h6 className="food-text">Quality Standards</h6>
            <p className="O-pages">
              Once your product is packed it will be delivered to your nearby
              locality you can directly visit the to buy the product.
            </p>
          </div>
        </div>

        <button type="button" className="O-btn">
          Explore Now
          <div className="O-circle">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="O-arrow"
            ></FontAwesomeIcon>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Orange;
