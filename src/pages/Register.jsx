import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const nomRef = useRef();
  const prenomRef = useRef();
  const motDePasseRef = useRef();
  const telephoneRef = useRef();
  const longitudeRef = useRef();
  const latitudeRef = useRef();
  const domaineRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nom"
                    required
                    ref={nomRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Prenom"
                    required
                    ref={prenomRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    required
                    ref={motDePasseRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="tel"
                    placeholder="Telephone"
                    required
                    ref={telephoneRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="emplacement"
                    required
                    ref={longitudeRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Longitude"
                    required
                    ref={longitudeRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Latitude"
                    required
                    ref={latitudeRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
