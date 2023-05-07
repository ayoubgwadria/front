import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartTechnicien from "./CartTechnicien";
import CartClient from "./CartClient";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/cart/cartUiSlice";

import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const usertype = useSelector((state) => state.login.user);
  const techposts = useSelector((state) => state.techpostulation.posts);
  const clientposts = useSelector((state) => state.clientpostulation.posts);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  console.log("this is cart", clientposts);
  return (
    <div className="cart__container">
      {usertype === "client" ? (
        <ListGroup className="cart">
          <div className="cart__close">
            <span onClick={toggleCart}>
              <i class="ri-close-fill"></i>
            </span>
          </div>

          <div className="cart__item-list">
            {clientposts.length === 0 ? (
              <h6 className="text-center mt-5">No item added to the cart</h6>
            ) : (
              clientposts.map((item, index) => (
                <CartClient item={item} key={index} />
              ))
            )}
          </div>
        </ListGroup>
      ) : (
        <ListGroup className="cart">
          <div className="cart__close">
            <span onClick={toggleCart}>
              <i class="ri-close-fill"></i>
            </span>
          </div>

          <div className="cart__item-list">
            {techposts.length === 0 ? (
              <h6 className="text-center mt-5">No item added to the cart</h6>
            ) : (
              techposts.map((item, index) => (
                <CartTechnicien item={item} key={index} />
              ))
            )}
          </div>
        </ListGroup>
      )}
    </div>
  );
};

export default Carts;
