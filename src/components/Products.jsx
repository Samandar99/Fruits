import React, {useState,useEffect} from "react";
import {getAllCategories} from '../api';
import "../styles/products.css";
import { CategoryList } from "./CategoryList";
// import img from '../img/Vegetable.png'

const Products = () => {
    const [catalog,setCatalog] = useState([]);
  
    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
        })
    },[])

    return (
    <div className="P-Wrapper">
      <div className="P-wrap">
        <div className="P-title">
          <i className="P-text">Organic</i>
          <h6 className="P-word">Our Products</h6>
        </div>
        <section className="">
         <CategoryList catalog={catalog}/>
           



        </section>
      </div>
    </div>
  );
};

export default Products;
