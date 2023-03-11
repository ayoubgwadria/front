import React from "react";
import { ListGroupItem } from "reactstrap";

import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart/cartSlice";
import { cartUiActions } from "../../../store/cart/cartUiSlice";

const CartItem = ({ item }) => {
  const { id, title, image01,} = item;

  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <ListGroupItem className="border-0 cart__item">

      <div className="cart__item-info d-flex gap-2">
        <span className="delete__btn" onClick={deleteItem}>
          <i class="ri-close-line"></i>
        </span>
      
        <img src={image01} alt="product-img" />


        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              <span className="quantity">Pending</span>
            </p>
          </div>

        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
