import React from "react";
import "../styles/Fruits.css";
import FotoFruit from '../img/Fruit1.png'
import FotoFruit3 from '../img/Fruit3.png'
import FotoFruit1 from '../img/Fruit.png'

const Fruits = () => {
  return (
    <div className="F-wrap">
      <div className="row">
        <div className="card">
          <img src={FotoFruit1} alt="" />
         
          <div className="content box1">
            <h3>July One</h3>
            <p>Fruit tasty</p>
            <br />
            <button className="F-btn">Fruit Juice</button>
          </div>
        </div>

        <div className="card">
          <img src={FotoFruit} alt="" />
           
          <div className="content box2">  
            <h3>Lorem Is</h3>
            <p>tasty beverage</p>
            <br />
            <button className="F-btn">Organic Food</button>
          </div>
        </div>

        <div className="card es">
          <img src={FotoFruit3} alt="" />
          <div className="content box3">
            <h3>Than You</h3>
            <p>Many Cookie</p>
            <br />
            <button className="F-btn">Nuts Cookies</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fruits;
