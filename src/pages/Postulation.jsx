import React, { useEffect, useRef } from 'react';
import '../styles/post.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { addpostulation } from '../store/postulation/addpostulation';
import { cartActions } from "../store/cart/cartSlice";

function Postulation() {
  const { postId, technicienId } = useParams();
  const LettreRef = useRef();
  const timeRef = useRef();

  const dispatch = useDispatch();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const Lettre_de_motivation = LettreRef.current.value;
    const durée = timeRef.current.value;
    await dispatch(addpostulation({ Lettre_de_motivation, durée }, postId, technicienId));
 

  };

  return (
    <section>
      <br /><br /><br /><br />
      <form className="post-form" onSubmit={submitHandler}>
        <label htmlFor="description" className="post-form-label">Lettre de motivation:</label>
        <textarea
          id="description"
          className="post-form-textarea"
          ref={LettreRef}
        />
        <label htmlFor="description" className="post-form-label">Durée:</label>
        <input
          type="number"
          ref={timeRef}
        />
        <br />
        <button type="submit" className="post-form-button">Postuler</button>
      </form>
    </section>
  );
}

export default Postulation;
