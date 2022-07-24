import React from "react";
import "../styles/Offer.css";

import cardfoto from "../img/tomato.png";
import cardfoto1 from "../img/keshu.png";
import cardfoto2 from "../img/Johori.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Offer = () => {
  return (
    <div className="Offer-wrap">
      <div className="Of-header">
        <div className="Of-left">
          <i className="products-name">Offer Products</i>
          <h6 className="for">We Offer Organic for You</h6>
        </div>
        <div className="Of-right">
          <button type="button" className="Offer-btn">
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

      <div className="Offer-block">
        <div className="Offer-box">
          <button className="P-Button">Vegetable</button>
          
          <img className="Offer-img" src={cardfoto} alt="" />
          <span className="of-veg">Vegan Red Tomato</span>   
          <hr className="drow"/>
          <div className="offer-footer">
            <div className="offer-footer-left">
              <span className="P-price-text">$ 14.00 USD</span>
              <span className="cost">$ 9.37 USD</span>
            </div>
            <div className="offer-footer-left">
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            </div>
          
          
          </div>
        
        </div>
        <div className="Offer-box">
          <button className="P-Button">Vegetable</button>
          
          <img className="Offer-img" src={cardfoto1} alt="" />
          <span className="of-veg">Vegan Red Tomato</span>   
          <hr className="drow"/>
          <div className="offer-footer">
            <div className="offer-footer-left">
              <span className="P-price-text">$ 14.00 USD</span>
              <span className="cost">$ 9.37 USD</span>
            </div>
            <div className="offer-footer-left">
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            </div>
          
          
          </div>
        
        </div>
        <div className="Offer-box">
          <button className="P-Button">Vegetable</button>
          
          <img className="Offer-img" src={cardfoto2} alt="" />
          <span className="of-veg">Vegan Red Tomato</span>   
          <hr className="drow"/>
          <div className="offer-footer">
            <div className="offer-footer-left">
              <span className="P-price-text">$ 14.00 USD</span>
              <span className="cost">$ 9.37 USD</span>
            </div>
            <div className="offer-footer-left">
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            </div>
          
          
          </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Offer;
