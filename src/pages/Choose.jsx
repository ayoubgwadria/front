import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import "../styles/choose.css"
import {SetUserType} from "../store/props/Isclient"
function Choose() {
  const [isClient, setIsClient] = useState(null); 
  const dispatch=useDispatch()
  function handleJoinAsClientClick() {
    setIsClient(true);  
    dispatch(SetUserType("client"))
  }

  function handleJoinAsProfessionalClick() {
    setIsClient(false);
    dispatch(SetUserType("Technicien"))
  }

  function getJoinButtonText() {
    if (isClient === true) {
      return 'Rejoindre en tant que client';
    } else if (isClient === false) {
      return 'Rejoindre en tant que technicien';
    } else {
      return 'Register';
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // handle form submission logic based on isClient value
  }

  return (

    <section>
    <br/><br/><br/><br/><br/>
    <div className="form-container">
      
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Joindre en tant que:</h2>
        <br/>
        <div className="signup-radio-container">
          <div className="signup-radio-box" style={{ display: 'inline-block', float: 'left' }} >
            <input
              type="radio"
              id="join-as-client"
              name="join-as"
              value="client"
              checked={isClient === true}
              onChange={handleJoinAsClientClick}
              className="signup-radio"
            />
            
            <label htmlFor="join-as-client" className="signup-radio-label"> <h3>Client</h3></label>
            <br/><br/>
           <h6>Je suis un client, je recrute pour un projet</h6>
          </div>
          <div className="signup-radio-box" style={{ display: 'inline-block', float: 'right' }}>

            <input
              type="radio"
              id="join-as-professional"
              name="join-as"
              value="professional"
              checked={isClient === false}
              onChange={handleJoinAsProfessionalClick}
              className="signup-radio"
            />
            <label htmlFor="join-as-professional" className="signup-radio-label"><h3>Technicien</h3></label>
            <br/><br/>
            <h6>Je suis technicien, à la recherche d'un emploi</h6>
          </div>
        </div>
        <Link to="/register">   
        <button type="submit" disabled={isClient === null} className={`signup-button${isClient === null ? ' disabled' : ''}`}>{getJoinButtonText()}</button>
        </Link>
      </form>
    </div>
  </section>




  );
}

export default Choose;
