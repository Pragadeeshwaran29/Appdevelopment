import React, { useEffect, useState } from 'react'
import './AdminLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
 function Login() {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[user,setUser]=useState('');
  const nav=useNavigate()
 const dispatch=useDispatch();
  const authenticate=(e)=>{
    e.preventDefault()
  // const usercheck = user.find(user => (user.username === username && user.password === password));
 if(username.length===0){
  alert("Enter Username")
 }
 else if(password.length===0){
  alert("Enter password")
 }
  // else if(!usercheck){
  //   alert("Wrong Username or Password!")
  // }
  else{
    // const user={username:username,name:username}
    // dispatch(setUsername(username));
    nav("/Sidebar")
  }
}
  
  return (
    <div className='login-body'>
    <div className="login-page">
    <div className="form">
      <div className="login">
        <div className="login-header">
          <h3>LOGIN</h3>
        </div>
      </div>
      <form className="login-form">
        <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button  className="swathi" onClick={authenticate}>login</button>
        </form>
        <p className="message">Not registered? <Link to="/" style={{textDecoration:'none'}}><a>Create an account</a></Link>
        </p>
    </div>
  </div>
  </div>
    )
  }
  export default Login