import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/LoginSlice";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);
  const {  error } = useSelector((state => state.login))
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = loginNameRef.current.value;
    const mot_de_passe = loginPasswordRef.current.value;
    await dispatch(login({ email, mot_de_passe },Navigate));

  };
  const Navigate = () => {
    navigate("/home")
  }

  return (
    <Helmet title="Connexion">
      <br /><br /><br /><br />
      <CommonSection title="Connexion" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
            {error && <div className="alert alert-danger">{error.toString()}</div>}
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn" disabled={loading}>
                  {loading ? "Loading..." : "Connexion"}
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
