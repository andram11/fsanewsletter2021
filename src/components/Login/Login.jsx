import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import UserService from '../../services/UserService'

import './Login.css';



async function loginUser(credentials) 
{ return UserService.signin(credentials).then(res => res.data)
}


/*USING FETCH instead of Axios UserService*/

/* return fetch('http://localhost:8080/api/v1/auth/signin', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json()) */

  
        

  

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    return (<Redirect to="/" />)
   
  }

  return(
    <div className="login-wrapper">
      <h5>Please log in</h5>
      <form id="loginForm" onSubmit={handleSubmit}>
      <div className="form-group" id="username">
              <label htmlFor="username">Username</label>
              <input type="text"  className="form-control" onChange={e => setUserName(e.target.value)} />
          </div>
      

          <div className="form-group" id="password">
              <label htmlFor="password">Password</label>
              <input type="password"  className="form-control"onChange={e => setPassword(e.target.value)} />
          </div>
        <div id="buttonLogin">
          <button className= "btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};