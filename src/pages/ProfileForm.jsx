import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { register } from "../store/auth/RegisterSlice";
import { addprofile } from "../store/profile/addprofile";

function ProfileForm() {

  const FormData = useSelector((state) => state.registerData.data);
  const userId = useSelector ((state)=>state.register.userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formationRef = useRef();
  const experience_professionnelleRef = useRef();
  const compétencesRef = useRef();
  const disponibilitéRef = useRef();
  const langueRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const formProfile = {
      formation: formationRef.current.value,
      experience_professionnelle: experience_professionnelleRef.current.value,
      compétences: compétencesRef.current.value,
      disponibilité: disponibilitéRef.current.value,
      langue: langueRef.current.value,
    };
  dispatch(register(FormData, navigate))
    .then(() => dispatch(addprofile({formProfile, userId})))
    .catch((error) => console.log(error));
  }
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
                <label>Formation et formation professionnelle:</label>

                <textarea className="form-control"
                  ref={formationRef}
                  name="formation"
                  required
                />
              </div>
              <div className="form-group">
                <label>Expérience professionnelle:</label>

                <textarea className="form-control"
                  ref={experience_professionnelleRef}
                  name="experience_professionnelle"
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
