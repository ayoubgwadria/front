import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import profile from "../assets/images/ava-1.jpg";
import "../styles/product-card.css";
const Technicien = () => {
  return (
    <>
      <section className="section">
        <Container>
        <br/><br/>
          <Card className="card-profile shadow mt--300">
            <div className="px-4">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image mx-auto">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle "
                        src={profile}
                        width="240" height="240"
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-5">
                <h3>
                  ala walhazi
                  <span className="font-weight-light"> , 27</span>
                </h3><br />
                <div className="text-center h6 font-weight-300" style={{ textAlign: 'left' }}>
                  Ben Arous, Fouchena <br />
                  55895371 <br />
                  Soudure <br />
                  University of Computer Science
                </div>

                <br />
                <button className="addTOCart__btn" >
                  Contacter
                </button>
              </div>
              <div className="mt-5 py-5 border-top text-center">
                <Row className="justify-content-center">
                  <Col lg="9">
                    <p>
                      An artist of considerable range, Ryan — the name taken
                      by Melbourne-raised, Brooklyn-based Nick Murphy —
                      writes, performs and records all of his own music,
                      giving it a warm, intimate feel with a solid groove
                      structure. An artist of considerable range.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Show more
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default Technicien;
