import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const Postuler = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
    <div className="product__img">
      <img src={image01} alt="product-img" className="w-50" />
    </div>

    <div className="product__content">
      <h5>
        <Link to={`/emplois/${id}`}>{title}</Link>
      </h5>
      <div className=" d-flex align-items-center justify-content-between ">
        <span className="product__price">${price}</span>
        <button className="addTOCart__btn" onClick={Postuler}>
        Postuler
        </button>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;