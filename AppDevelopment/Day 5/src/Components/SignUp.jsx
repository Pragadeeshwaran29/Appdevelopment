import React, { useState} from 'react'
import './SignUp.css';
import { Link } from 'react-router-dom';
function SignUp() {
  const[emailid,setEmailid]=useState('');
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[mobilenumber,setMobilenumer]=useState('');
  const senddb=(e)=>{
    e.preventDefault()
    const details={mobilenumber,emailid,password,username}
    if(emailid.length===0||password.length===0||mobilenumber.length===0||username.length===0){
      alert("Enter All fields")
    }
}
  return (
    <div className='body'>
    <div id="feedback-form">
  <h2 class="header" >Sign Up</h2>
  <div>
    <form>
      <input type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} placeholder="Email"/>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      <input type="text"   value={mobilenumber} onChange={(e)=>setMobilenumer(e.target.value)} placeholder="Mobile number" />
      <button type="submit" onClick={senddb}>Register</button>
    </form><br/>
    <Link to="/Adminlogin" style={{textDecoration:'none'}}><label className='ahaa'>Already Have an Account? Login</label></Link>
  </div>
</div>
    </div>
    )
  }
  export default SignUp