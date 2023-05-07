import React from "react";
import { ListGroupItem, Button } from "reactstrap";
import { Row, Col } from "reactstrap";

import "../../../styles/cart-item.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartUiActions } from "../../../store/cart/cartUiSlice";

const CartClient = ({ item }) => {
  const { _id, titre, status } = item;
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const toggle = () => {
    navigation(`/chatroom/${_id}`);
    dispatch(cartUiActions.toggle());
  };
  return (
    <ListGroupItem className="cart-client-item">
      <div className="cart-client-item__content">
        <Row className="cart-client-item__row">
          <Col className="cart-client-item__col ">
            <div className="cart-client-item__details">
              <div className="cart-client-item__title-status">
                <Row className="cart-client-item__row">
                  <Col xs="9" className="cart-client-item__col">
                    <h6 className="cart-client-item__title">{titre}</h6>
                  </Col>
                  <Col className="cart-client-item__col">
                    <p className="cart-client-item__status">
                      <span
                        className={`cart-client-item__status-text ${
                          status === "pending"
                            ? "text-info"
                            : status === "accepted"
                            ? "text-success"
                            : "text-danger"
                        }`}
                      >
                        {status}
                      </span>
                      {status === "accepted" && (
                        <Button
                          className="cart-client-item__button"
                          color="success"
                          onClick={toggle}
                        >
                          Contacter
                        </Button>
                      )}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </ListGroupItem>
  );
};

export default CartClient;
