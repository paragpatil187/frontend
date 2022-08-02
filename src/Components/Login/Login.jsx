import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
const navigate= useNavigate();
 
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Auth=async(e)=>{
    e.preventDefault();
    try{
      await axios.post('https://authenticationuserapp.herokuapp.com/login', {
                email: email,
                password: password
            });

      navigate("/home")
    }
    catch(err){
      console.log(err)
    }
  }
  


  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  
  
  
  
  return (
    <div className="Login">
      <header className="Login-header">
        <form onSubmit={(e) => { Auth(e) }}>
        
          <h3> Log In Form </h3>
         
          <label>
            Email:
          </label><br />
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
         
          
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default Login;