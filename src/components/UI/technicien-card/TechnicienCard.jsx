import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";


const TechnicienCard = (props) => {
  const { id, image01 } = props.item;



  return (
    <div className="product__item d-flex align-items-center">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>
      
      <div className="product__content">
        
        <h5 className="mb-1">
          <Link to={`/foods/${id}`}>Name</Link>
        </h5>
       
        <div className="d-flex flex-column mt-2">
          <div className="d-flex align-items-center">
            <span className="product__stars mr-2">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        <br/>
        <div className="d-flex flex-column">
          <span className="product__label">emplacement</span>
        </div>

      </div>
    </div>
  );
};

export default TechnicienCard;
