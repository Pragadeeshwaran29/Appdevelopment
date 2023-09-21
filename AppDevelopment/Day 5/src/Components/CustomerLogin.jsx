import React, { useEffect, useState } from 'react'
import './CustomerLogin.css';
import Footer from '../Pages/Footer';
// import { Link, useNavigate } from 'react-router-dom';
 function Login() {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[user,setUser]=useState('');
  // const nav=useNavigate()
 
  const authenticate=(e)=>{
    e.preventDefault()
  const usercheck = user.find(user => (user.username === username && user.password === password));
 if(username.length===0){
  alert("Enter Username")
 }
 else if(password.length===0){
  alert("Enter password")
 }
  else if(!usercheck){
    alert("Wrong Username or Password!")
  }
  // else{
  //   nav("/home")
  // }
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
        <p className="message">Not registered? <a>Create an account</a>
        </p>
        <Footer/>
    </div>
  </div>
  </div>
    )
  }
  export default Login

  //   <link rel="stylesheet" href="css/style.css"/>
  //   <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
  //   <meta name="viewport" content="width=device-width, initial-scale=1" />
  //   <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
  //   <title>Login</title>
  // <body>
  //   <div className="main"/>
  //     <p className="sign" align="center">Login</p>
  //     <form className="form1"/>
  //       <input className="E" type="mobile" align="center" placeholder="Email"/>
  //       <input className="P" type="password" align="center" placeholder="Password"/>
  //       <a className="submit" align="center">Login</a>
  //       </body>