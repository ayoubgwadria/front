import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { getpost } from "../store/post/getpost";
import "../styles/emploisdet.css";
import { useParams } from "react-router-dom";



const EmploisDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(getpost(id));
  }, [dispatch, id]);
  const post = useSelector((state) => state.getpost.post);
  return (
    <Helmet title="Emplois">
      <br/><br/>
      <section>
        <Row>
          <Col md={6} className="domaine-col">
            <div className="domaine-section">
              <span className="domaine-label">domaine:</span>{post?.domaine}
            </div>
          </Col>
        </Row>
        <Container className="emplois-container">

          <Row>
            <Col md={6}>
              <h3 className="name">{post?.creator.nom} {post?.creator.prenom}</h3>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <h2 className="post-title">{post?.titre}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="description-box">
                <h4 className="description-title">Description</h4>
                <p className="description-text">{post?.description}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="conditions-box">
                <h4 className="conditions-title">Conditions</h4>
                <ul className="conditions-list">
                  <li>Minimum 2 ans d'expérience</li>
                  <li>Maîtrise de la langue française et anglaise</li>
                  <li>Connaissance des outils informatiques</li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="prix-col" style={{ marginTop: "10px" }}>
              <h4>Prix</h4>
              <p>{post?.prix}DT</p>
            </Col>

            <Col>
              <br />
              <button className="postuler-button" variant="primary">Postuler</button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default EmploisDetails;
