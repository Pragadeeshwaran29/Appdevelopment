import React, { useState } from 'react';
import './AdminLogin.css';
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Use the spread operator to update the state
    setFormdata({ ...formdata, [name]: value });
    console.log(formdata);
  };

  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/sideBar");
    dispatch(
      login({
        username: formdata.username,
      })
    );
  };

  const authenticate = (e) => {
    e.preventDefault();
    if (username.length === 0) {
      alert("Enter Username");
    } else if (password.length === 0) {
      alert("Enter password");
    } else {
      nav("/SideBar");
    } 
  };

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
            <input
              type="text"
              name='username'
              placeholder="username"
              value={formdata.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name='password'
              placeholder="password"
              value={formdata.password}
              onChange={handleChange}
            />
            <button className="swathi" onClick={handleSubmit}>login</button>
          </form>
          <p className="message">Not registered? <Link to="/" style={{ textDecoration: 'none' }}><a>Create an account</a></Link></p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
