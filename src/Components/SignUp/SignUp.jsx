import React, { useState } from 'react';
import './signup.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const[roles,setRoles]=useState("")
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const navigate=useNavigate();
  const Register=async(e)=>{
    e.preventDefault();
    try{
      axios.post("https://authenticationuserapp.herokuapp.com/register",{
        name:name,
        email:email,
        password:password,
        phone:phone,
        roles:roles

      });
      navigate("/")
      
    }
    catch(err){
      console.log(err)
    }
    
  }

  
  const handleChange = (e) => {
    setName(e.target.value);
  }
 
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }
  const handleRolesChange=(e)=>{
    setRoles(e.target.value)

  }
 
  const handleSubmit = (e) => {
    if (password != confPassword) {
      console.log("password Not Match");
    } else {
      console.log('A form was submitted with Name :"' + name +
      '" ,phone :"' + phone + '" and Email :"' + email + '"');
    }
    e.preventDefault();
  }
  
  return (
    <div className="SignUp">
      <header className="SignUp-header">
        <form onSubmit={(e) => { Register(e) }}>
          <h3> Sign-up Form </h3>
          <label >
            Name:
          </label><br />
          <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br />
          <label>
            Email:
          </label><br />
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <label>
            Confirm Password:
          </label><br />
          <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
          <label >
            phone:
          </label><br />
          <input type="text" value={phone} required onChange={(e) => { handlePhoneChange(e) }} /><br />
          <label >
            roles:
          </label><br />
          <input type="text" value={roles} required onChange={(e) => { handleRolesChange(e) }} /><br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default SignUp;