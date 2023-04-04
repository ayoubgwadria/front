import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addpost } from "../store/post/addpost";
import { Card, Container, Row, Col } from "reactstrap";
import '../styles/post.css';

function Post() {
  const titreRef = useRef();
  const descriptionRef = useRef();
  const domaineRef = useRef();
  const prixRef = useRef();
  const conditionRef = useRef();
  const [message, setMessage] = useState(null);

  const success = useSelector((state) => state.AddPost.successMessage)
  const failure = useSelector((state) => state.AddPost.error)
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();


    const FormData = {
      titre: titreRef.current.value,
      description: descriptionRef.current.value,
      domaine: domaineRef.current.value,
      prix: prixRef.current.value,
      condition: conditionRef.current.value,
    };

    await dispatch(addpost(FormData))

  }
  useEffect(() => {
    if (failure != null) { setMessage('Erreur lors de la création du post') }
    if (success != null) { setMessage('Post créé avec succès') }
  }, [success, failure])
  return (
    <section>
      <br/><br/><br/>
      <div className='post_titre'>
        <h3>Créer un emploi</h3>
      </div>
      <br/>  
      <Container>
      {message && <Card body className="bg-danger justify-content-center align-items-center">{message}</Card>}
       <br/>
        <form onSubmit={submitHandler}>
          <Row>
            <Col>
              <label htmlFor="title" className="post-form-label">Titre:</label>
              <input
                name="titre"
                ref={titreRef}
                type="text"
                className="form-control"
              />
            </Col>
            <Col>
              <label htmlFor="domain" className="post-form-label">Domain:</label>
              <input
                type="text"
                className="form-control"
                ref={domaineRef}
                name="domaine"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <label htmlFor="description" className="post-form-label">Description:</label>
              <textarea
                ref={descriptionRef}
                className="form-control"
                name="description"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <label htmlFor="condition" className="post-form-label">Condition:</label>
              <textarea
                ref={conditionRef}
                className="form-control"
                name="condition"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <label htmlFor="price" className="post-form-label">Prix:</label>
              <input
                ref={prixRef}
                type="number"
                className="form-control"
                name="prix"
              />
            </Col>
          </Row>
            <br/>
          <Row>
            <Col className="col_poster">
              <button type="submit" className="btn_poster">Poster</button>
            </Col>
          </Row>
        </form>
      </Container>


    </section>
  );
}

export default Post;
