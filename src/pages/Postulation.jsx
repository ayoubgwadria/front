import React, { useState } from 'react';
import '../styles/post.css';
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart/cartSlice";
function PostForm() {
  
    
  const [description, setDescription] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit form data to backend or do other actions
  }

  return (
<section>
<br/><br/><br/><br/>    
<form className="post-form" onSubmit={handleSubmit}>
   

      <label htmlFor="description" className="post-form-label">Lettre de motivation:</label>
      <textarea
        id="description"
        className="post-form-textarea"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit" className="post-form-button">Postuler</button>
    </form>
</section>
  );
}

export default PostForm;