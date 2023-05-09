import React, { useEffect, useState } from "react";
import "../../../styles/product-card.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart/cartSlice";
import jwt_decode from "jwt-decode";

const ProductCard = (props) => {
  const { _id, titre, prix, creator } = props.item;
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [UserType, setUserType] = useState("");

  const navigate = useNavigate();

  const decode = async () => {
    const decodedToken = await jwt_decode(token);
    setUserType(decodedToken.usertype);
  };

  useEffect(() => {
    if (!!token) {
      decode();
    }
  }, [token]);

  return (
    <div className="product__item">
      <div className="product__content">
        <img src={props.image} alt="user" />
        <h5>{creator?.nom}</h5>
        <h6>{titre}</h6>

        <div className="d-flex align-items-center justify-content-between ">
          <span className="product__price">${prix}</span>
          <Link to={`/emplois/${_id}`}>
            <button className="addTOCart__btn">Plus de détails</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
