import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "reactstrap";
import pict from "../assets/images/ava-1.jpg";
import "../styles/technicieninfo.css";
import { getprofile } from "../store/profile/getprofile";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import {IoLocation} from "react-icons/io5"


const Technicien = () => {
  const dispatch = useDispatch();
  const { _id } = useParams()
  console.log(_id)
  useEffect(() => {
    dispatch(getprofile(_id));
  }, [dispatch]);

  const profile = useSelector((state) => state.getprofile.profile);

  return (
    <Helmet title="Technicien information">
      <br />
      <section> 
        <Card className="card_tech">
          <Container>
            <Row>
              <Col md="8" className="profile-info">
                <Card className="card_tech"> <br />
                  <div className="info-block">
                    <h5>Domaine:</h5>
                    <p className="domaine">{profile?.domaine}</p>
                  </div>
                  <div className="info-block">
                    <h5>Formation:</h5>
                    <p className="formation">{profile?.formation}</p>
                  </div>
                  <div className="info-block">
                    <h5>Compétences:</h5>
                    <p className="competences">{profile?.compétences}</p>
                  </div>
                  <div className="info-block">
                    <h5>Disponibilité:</h5>
                    <p className="disponibilite">{profile?.disponibilité}</p>
                  </div>
                  <div className="info-block">
                    <h5>Langue:</h5>
                    <p className="langue">{profile?.langue}</p>
                  </div>
                  <button className="btn_contacter">Contacter</button>
                </Card>
              </Col>

              <Col>
                <div className="tech_n">
                  <div>
                    <img alt="..." className="tech_img" src={pict} />
                  </div>
                  <h3 className="tech_name">
                    {profile.user?.prenom}<span> {profile.user?.nom}</span>
                  </h3>
                  <br />
                  <div className="apropos_tech" >
                    <h5 >a propos de moi :</h5>
                    <p>{profile?.bio}</p>
                  </div>
                </div>
              </Col>


            </Row>
          </Container>
        </Card>
      </section>
    </Helmet>
  );
};

export default Technicien;
