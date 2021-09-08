import React, {useState} from 'react'
import './Signup.css'
import {useHistory} from 'react-router-dom'
import UserService from '../../services/UserService'


async function signUpUser(credentials) 
{ return UserService.signup(credentials).then(res => res.data)
}

export default function Signup() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail]=useState();
  let history = useHistory();
  
  const handleSignUp = async e => {
    e.preventDefault();
    const signUpResponse = await signUpUser({
      username,
      password,
      email
    });
    alert(signUpResponse)
    history.push("/signin")
    
    
   
  }

  return(
    <div className="signup-wrapper">
      <h5>Please sign up</h5>
      <form id="signUpForm" onSubmit={handleSignUp}>

      <div className="form-group" id="email">
              <label htmlFor="email">Intys Email Address</label>
              <input type="email"  className="form-control"onChange={e => setEmail(e.target.value)} />
          </div>


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