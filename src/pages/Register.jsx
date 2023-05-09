import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/register.css";
import heroImg from "../assets/images/hero.png";
import { Container, Row, Col, Input } from "reactstrap";
import { register } from "../store/auth/RegisterSlice";
import { useNavigate } from "react-router-dom";
import { SetRegisterData } from "../store/props/registerdata";
import { BiMap } from "react-icons/bi";
import ModalLayout from "../modal/Modal";
import Map from "./Map";
function Register() {
  const UserType = useSelector((state) => state.UserType.isClient);
  const [modal, setModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
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
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("nom", nomRef.current.value);
    formData.append("prenom", prenomRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("mot_de_passe", motDePasseRef.current.value);
    formData.append("telephone", telephoneRef.current.value);
    formData.append("emplacement", emplacementRef.current.value);
    formData.append("longitude", longitudeRef.current);
    formData.append("latitude", latitudeRef.current);
    formData.append("usertype", UserType);
    console.log("form data ", formData);
    if (UserType == "client") {
      dispatch(register(formData, navigate));
    } else if (UserType == "Technicien") {
      dispatch(SetRegisterData(formData));

      navigate("/profileform");
    }
  };

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
                <Row>
                  <Col>
                    <label htmlFor="price" className="post-form-label">
                      Image:
                    </label>
                    <Input
                      id="exampleFile"
                      name="file"
                      type="file"
                      onChange={handleImageChange}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    {preview && <img src={preview} alt="Preview" width={100} />}
                  </Col>
                </Row>

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
