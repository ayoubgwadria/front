import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addpost } from "../store/post/addpost";
import jwt_decode from 'jwt-decode';
import '../styles/post.css';

function Post() {
  const titreRef = useRef();
  const descriptionRef = useRef();
  const domaineRef = useRef();
  const prixRef = useRef();

  const token = useSelector((state) => state.login.token)

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const decodedToken = await jwt_decode(token);
    
    const FormData = {
      titre: titreRef.current.value,
      description: descriptionRef.current.value,
      domaine: domaineRef.current.value,
      prix: prixRef.current.value,
      userid: decodedToken.id,
    };
    dispatch(addpost(FormData))
  };

  return (
    <section>
      <br /><br /><br /><br />
      <form className="post-form" onSubmit={submitHandler}>
        <label htmlFor="title" className="post-form-label">Titre:</label>
        <input
          name="titre"
          ref={titreRef}
          type="text"
          className="post-form-input"
        />

        <label htmlFor="description" className="post-form-label">Description:</label>
        <textarea
          ref={descriptionRef}
          className="post-form-textarea"
          name="description"
        />

        <label htmlFor="domain" className="post-form-label">Domain:</label>
        <input
          type="text"
          className="post-form-input"
          ref={domaineRef}
          name="domaine"
        />

        <label htmlFor="price" className="post-form-label">Prix:</label>
        <input
          ref={prixRef}
          type="number"
          className="post-form-input"
          name="prix"
        />

        <button type="submit" className="post-form-button">Poster</button>
      </form>
    </section>
  );
}

export default Post;
