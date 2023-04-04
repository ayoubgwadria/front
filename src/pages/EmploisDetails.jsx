import { Card, Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { getpost } from "../store/post/getpost";
import "../styles/emploisdet.css";
import { Link, useParams } from "react-router-dom";
import pict from "../assets/images/ava-1.jpg";


const EmploisDetails = () => {
  const dispatch = useDispatch();
  const technicienId = useSelector((state) => state.login.id)
  const { id } = useParams();
  const postId = id;

  useEffect(() => {
    dispatch(getpost(id));
  }, [dispatch, id]);
  const post = useSelector((state) => state.getpost.post);
  return (
    <Helmet title="Emplois">
      <br />
      <section>

        <Card className="card_emp">
          <Row>
            <Col md="1">
              <div className="emp_domaine">
                {post?.domaine}
              </div>
            </Col>
            <Col className="emp_date">
              <div>
                {post?.date ? post.date.slice(0, 10) : ''}
              </div>
            </Col>

          </Row>

          <Container>

            <Row>
              <Col md="4" className="client_empiinf">
                <div >

                  <div>
                    <img alt="..." className="emp_img" src={pict} />
                  </div>
                  <h3 className="emp_name">
                    {post?.creator.nom}<span> {post?.creator.prenom}</span>
                  </h3>
                  <br />
                </div>
              </Col>

              <Col md="8" className="emp-info">
                <div className="emp_titre">
                  <h3>{post?.titre}</h3>
                </div>
                <Card className="card_emp"> <br />

                  <div className="info-block">
                    <h5>Description:</h5>
                    <p >{post?.description}</p>
                  </div>
                  <div className="info-block">
                    <h5>Condition:</h5>
                    <p >{post?.condition}</p>
                  </div>
                  <div className="emp_prix">
                    <h5>{post?.prix}.DT</h5>
                  </div>
                  <Link to={`/postulation/${postId}/${technicienId}`} >
                    <button className="btn_contacter">postuler</button>
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </section>
    </Helmet>
  );
}

export default EmploisDetails;
