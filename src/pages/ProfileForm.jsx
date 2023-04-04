import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { register } from "../store/auth/RegisterSlice";
import { addprofile } from "../store/profile/addprofile";
import {login} from "../store/auth/LoginSlice"
function ProfileForm() {

  const FormData = useSelector((state) => state.registerData.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const domaineRef = useRef();
  const formationRef = useRef();
  const compétencesRef = useRef();
  const disponibilitéRef = useRef();
  const langueRef = useRef();
  const bioRef = useRef();

  

  const submitHandler = (e) => {
    e.preventDefault();
    const formProfile = {
      formation: formationRef.current.value,
      compétences: compétencesRef.current.value,
      disponibilité: disponibilitéRef.current.value,
      langue: langueRef.current.value,
      domaine: domaineRef.current.value,
      bio:  bioRef.current.value,
    };
    const email = FormData.email;
    const mot_de_passe = FormData.mot_de_passe;
  
    dispatch(register(FormData, navigate))
      .then(() => dispatch(login({ email, mot_de_passe })))
      .then(() => dispatch(addprofile( formProfile )))
      .catch((error) => console.log(error));
  };
  

  return (
    <Helmet title="Technicien">
      <br /><br /><br /><br /><br />
      <Container>
        <Row>
          <Col>
            <h2>Profil Technicien</h2>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <form onSubmit={submitHandler} >
            <div className="form-group">
                <label>Domaine:</label>

                <textarea className="form-control"
                  ref={domaineRef}
                  name="domaine"
                  required
                />
              </div>
              <div className="form-group">
                <label>Formation et formation professionnelle:</label>

                <textarea className="form-control"
                  ref={formationRef}
                  name="formation"
                  required
                />
              </div>
              <div className="form-group">
                <label>Compétences:</label>

                <textarea className="form-control"
                  ref={compétencesRef}
                  name="compétences"
                  required
                />
              </div>
              <div className="form-group">
                <label>Disponibilité:</label>

                <textarea className="form-control"
                  ref={disponibilitéRef}
                  name="disponibilité"
                  required
                />
              </div>
              <div className="form-group">
                <label>à propos de toi:</label>

                <textarea className="form-control"
                  ref={bioRef}
                  name="bio"
                  required
                />
              </div>
              <div className="form-group">
                <label>Langue:</label>

                <input className="form-control"
                  type="text"
                  ref={langueRef}
                  name="langue"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
}

export default ProfileForm;
