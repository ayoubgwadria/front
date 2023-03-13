import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/LoginSlice";
import "../styles/login.css"
import heroImg from "../assets/images/hero.png"
const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);
  const { error } = useSelector((state => state.login))
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = loginNameRef.current.value;
    const mot_de_passe = loginPasswordRef.current.value;
    await dispatch(login({ email, mot_de_passe }, Navigate));

  };
  const Navigate = () => {
    navigate("/home")
  }

  return (

    <section>
      <Container>

        <Row>
          <Col>
            <Col>
              <br /><br /><br /><br />
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" />
              </div>
            </Col>
          </Col>
          <Col  className="m-auto text-center">
            {error && <div className="alert alert-danger">{error.toString()}</div>}
          <br/><br/><br/>
            <div className="Login-container">
              <h2 className="Login-title">Inscription</h2>
              <br/>
              <br />
              <form className="Login-form" onSubmit={submitHandler}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                    className="form-input"
                  />
                </div>
                <button type="submit" className="form-submit-button" disabled={loading}>
                  {loading ? "Loading..." : "Connexion"}
                </button>

              </form>
              <Link to="/choose">
                Don't have an account? Create an account
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  );
};

export default Login;
