import React from "react";
import { ListGroupItem, Button } from "reactstrap";
import { Row, Col } from 'reactstrap';
import "../../../styles/cart-item.css";

const CartClient = ({ item }) => {
  const { _id, titre, status } = item;

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
                      <span className={`cart-client-item__status-text ${status === "pending" ? "text-info" : status === "accepted" ? "text-success" : "text-danger"}`}>{status}</span>
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
