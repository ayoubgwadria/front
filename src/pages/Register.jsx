import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/register.css";
import heroImg from "../assets/images/hero.png";
import { Container, Row, Col } from "reactstrap";
import { register } from "../store/auth/RegisterSlice";
import { useNavigate } from "react-router-dom";
import { SetRegisterData } from "../store/props/registerdata";
import { BiMap } from "react-icons/bi";
import ModalLayout from "../modal/Modal";
import Map from "./Map";
function Register() {
  const UserType = useSelector((state) => state.UserType.isClient);
  const [modal, setModal] = useState(false);
  const [Error, setError] = useState({});
  const nomRef = useRef();
  const prenomRef = useRef();
  const emailRef = useRef();
  const motDePasseRef = useRef();
  const telephoneRef = useRef();
  const emplacementRef = useRef();
  const longitudeRef = useRef();
  const latitudeRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggle = () => setModal(!modal);

  const submitHandler = (e) => {
    e.preventDefault();
    const verfi = validation();

    if (verfi) {
      const formData = {
        nom: nomRef.current.value,
        prenom: prenomRef.current.value,
        email: emailRef.current.value,
        mot_de_passe: motDePasseRef.current.value,
        telephone: telephoneRef.current.value,
        emplacement: emplacementRef.current.value,
        longitude: longitudeRef.current,
        latitude: latitudeRef.current,
        usertype: UserType,
      };
      console.log("form data ", formData);
      /*  if (UserType == "client") {
      dispatch(register(formData, navigate));
    } else if (UserType == "Technicien") {
      dispatch(SetRegisterData(formData));

      navigate("/profileform");
    } */
    }
  };
  const validation = () => {
    const errobj = {};
    var verif = true;

    if (!nomRef.current.value) {
      errobj.nom = "Nom oblicagatoire";
      console.log("ref nom,", nomRef.current.value);
      verif = false;
      setError(errobj);
      return verif;
    }
  };
  console.log("latiture ", Error);
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <Col>
              <br />
              <br />
              <br />
              <br />
              <br />

              <div className="hero__img">
                <img src={heroImg} alt="hero-img" />
              </div>
            </Col>
          </Col>
          <Col>
            <br /> <br /> <br />
            <div className="register-container">
              <h2 className="register-title">Inscription</h2>
              <br />

              <form className="register-form">
                <div className="form-group">
                  <input
                    type="text"
                    ref={nomRef}
                    name="nom"
                    placeholder="Nom"
                    className="form-input"
                  />
                  {Error?.nom !== undefined && <span>{Error?.nom}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    ref={prenomRef}
                    name="prenom"
                    placeholder="Prenom"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    ref={emailRef}
                    name="email"
                    placeholder="Email"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    ref={motDePasseRef}
                    name="motDePasse"
                    placeholder="Mot de passe"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    ref={telephoneRef}
                    name="telephone"
                    placeholder="Telephone"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    ref={emplacementRef}
                    name="emplacement"
                    placeholder="Emplacement"
                    className="form-input"
                  />
                </div>
                {/*  <div className="form-group">
                  <input
                    type="text"
                    ref={longitudeRef}
                    name="longitude"
                    placeholder="Longitude"
                    className="form-input"
                    required
                  />
                </div> */}
                {/*   <div className="form-group">
                  <input
                    type="text"
                    ref={latitudeRef}
                    name="latitude"
                    placeholder="Latitude"
                    className="form-input"
                    required
                  />
                </div> */}
                <div className="form-group">
                  <BiMap
                    size={50}
                    onClick={toggle}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <button
                  onClick={submitHandler}
                  type="button"
                  className="form-submit-button"
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <ModalLayout modal={modal} toggle={toggle} size={"xl"}>
        <Map lng={longitudeRef} lat={latitudeRef} />
      </ModalLayout>
    </section>
  );
}

export default Register;
