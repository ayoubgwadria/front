import React from "react";
import { ListGroupItem, Button } from "reactstrap";
import { Row, Col } from 'reactstrap';
import "../../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import { acceptpostulation } from "../../../store/postulation/acceptpostulation"
import { refusepostulation } from "../../../store/postulation/refusepostulation"
const CartClient = ({ item }) => {
  const { _id, titre, status, Lettre_de_motivation, technicienId } = item;
  const dispatch = useDispatch();
  const HandleAccept = () => {
    dispatch(acceptpostulation(_id));
  }
  const HandleRefuse = () => {
    dispatch(refusepostulation(_id));
  }

  let buttons;
  if (status === "pending") {
    buttons = (
      <Col className="cart-client-button">
        <Row className="cart-client-item__row">
          <Col>
            <Button className="cart-client-item__button" color="success" onClick={HandleAccept} >
              Accepter
            </Button>
          </Col>
          <Col >
            <Button className="cart-client-item__button" color="danger" onClick={HandleRefuse} >
              Refuser
            </Button>
          </Col>
        </Row>
      </Col>
    );
  } else if (status === "accepted") {
    buttons = (
      <Col>
        <Button className="cart-client-item__button" color="success">
          Contacter
        </Button>
      </Col>
    );
  }

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
              <div className="cart-client-item__info">
                <Row className="cart-client-item__row">
                  <Col>
                    <p className="cart-client-item__tech-name">
                      <span className="cart-client-item__tech-name-text">{technicienId.prenom} {technicienId.nom}</span>
                    </p>
                  </Col>
                  <Col className="cart-client-button">
                    {buttons}
                  </Col>
                </Row>
                <Row className="cart-client-item__row">
                  <Col>
                    <p className="cart-client-item__motivation">
                      <span className="cart-client-item__motivation-text">{Lettre_de_motivation}</span>
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
