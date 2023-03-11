import React, { useEffect, useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/auth/RegisterSlice";

const Register = () => {
  const nomRef = useRef();
  const prenomRef = useRef();
  const emailRef = useRef();
  const motDePasseRef = useRef();
  const telephoneRef = useRef();
  const emplacementRef = useRef();
  const longitudeRef = useRef();
  const latitudeRef = useRef();
  const domaineRef = useRef();


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { successMessage, error } = useSelector((state => state.register))
  const { loading } = useSelector((state) => state.register);
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = {
      nom: nomRef.current.value,
      prenom: prenomRef.current.value,
      email: emailRef.current.value,
      mot_de_passe: motDePasseRef.current.value,
      telephone: telephoneRef.current.value,
      emplacement: emplacementRef.current.value,
      longitude: longitudeRef.current.value,
      latitude: latitudeRef.current.value,
      domaine: domaineRef.current.value,
    };

    await dispatch(register(formData,navigate));
  }


  return (
    <Helmet title="Inscription">
      <br/><br/><br/><br/>  
      <CommonSection title="Inscription" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              {error && <div className="alert alert-danger">{error.toString()}</div>}
              {successMessage && <div className="alert alert-success">{successMessage.toString()}</div>}
              <form className="form mb-5" onSubmit={submitHandler}>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nom"
                    required
                    ref={nomRef}
                    name="nom"
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
                    type="text"
                    placeholder="Email"
                    required
                    ref={emailRef}
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
                    ref={emplacementRef}
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
                {<div className="form__group">
                  <input
                    type="text"
                    placeholder="domaine"
                    required
                    ref={domaineRef}
                  />
                </div>}

                <button type="submit" className="addTOCart__btn" disabled={loading}>
                  {loading ? "Loading..." : "Inscription"}
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
