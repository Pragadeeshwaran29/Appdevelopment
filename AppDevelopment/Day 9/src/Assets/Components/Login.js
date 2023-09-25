

import React, { useState, useEffect } from "react";
import basestyle from "./Base.module.css";
import loginstyle from "./Login.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { getregister } from "../api";

const Login = ({ setUserState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getregister();
      setDetails(response.data);
      console.log(response);
    } catch (error) {
      console.log("error fetching data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (details.some((user) => user.email === email && user.password === password)) {
      navigate("/Home");
    // } else {
    //   setError("User not found");
    // }
  };

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className={`${loginstyle.login} ${showAnimation ? "show" : ""} custom-login`}>
      <form onSubmit={handleSubmit}>
        <img id="limg"  />
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <p className={basestyle.error}></p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <p className={basestyle.error}>{error}</p>
        <button className={basestyle.button_common} type="submit">
          Login
        </button>
      </form>
      <NavLink to="/signup">New to Vector? Create an account</NavLink>
    </div>
  );
};

export default Login;
