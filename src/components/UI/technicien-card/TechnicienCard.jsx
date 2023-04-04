import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";


const TechnicienCard = (props) => {
  const { user,domaine} = props.item;



  return (
    <div className="product__item d-flex align-items-center">
      <div className="product__content">
        
        <h5 className="mb-1">
          <Link to={`/technicien/${user._id}`}>{user.nom} {user.prenom}</Link>
        </h5>
       
        <div className="d-flex flex-column mt-2">
          <div className="d-flex align-items-center">
            <span className="product__stars mr-2">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        <br/>
        <div className="d-flex flex-column">
          <span className="product__label">{user.emplacement}</span>
        </div>
        <div className="product__img">
      <span>{domaine}</span>
      </div>
      </div>
    </div>
  );
};

export default TechnicienCard;
