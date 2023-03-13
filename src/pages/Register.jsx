import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "../styles/register.css"
import heroImg from "../assets/images/hero.png"
import { Container, Row, Col } from "reactstrap";
import { register } from "../store/auth/RegisterSlice";
import { useNavigate } from 'react-router-dom';

function Register() {
    const UserType = useSelector((state) => state.UserType.isClient);
    const nomRef = useRef();
    const prenomRef = useRef();
    const emailRef = useRef();
    const motDePasseRef = useRef();
    const telephoneRef = useRef();
    const emplacementRef = useRef();
    const longitudeRef = useRef();
    const latitudeRef = useRef();
    const navigate=useNavigate();

    const dispatch = useDispatch();

    const submitHandler = (e) => {
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
            usertype: UserType,
        };

        dispatch(register(formData,navigate));
    };
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <Col>
                            <br /><br /><br /><br /><br />
                            <div className="hero__img">
                                <img src={heroImg} alt="hero-img" />
                            </div>
                        </Col>
                    </Col>
                    <Col >
                        <br /> <br /> <br />
                        <div className="register-container">
                            <h2 className="register-title">Inscription</h2>
                            <br />
                            <form onSubmit={submitHandler} className="register-form">
                                <div className="form-group">

                                    <input
                                        type="text"
                                        ref={nomRef}
                                        name="nom"
                                        placeholder="Nom"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="text"
                                        ref={prenomRef}
                                        name="prenom"
                                        placeholder="Prenom"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="email"
                                        ref={emailRef}
                                        name="email"
                                        placeholder="Email"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="password"
                                        ref={motDePasseRef}
                                        name="motDePasse"
                                        placeholder="Mot de passe"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="text"
                                        ref={telephoneRef}
                                        name="telephone"
                                        placeholder="Telephone"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="text"
                                        ref={emplacementRef}
                                        name="emplacement"
                                        placeholder="Emplacement"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="text"
                                        ref={longitudeRef}
                                        name="longitude"
                                        placeholder="Longitude"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="text"
                                        ref={latitudeRef}
                                        name="latitude"
                                        placeholder="Latitude"
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <button type="submit" className="form-submit-button">S'inscrire</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default Register;
