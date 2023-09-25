import React, { useState } from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./SignUp.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { getlogin } from "../../api";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const isStrongPassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: username,
      contact: number,
      email: email,
      age: age,
      password: password,
    };

    if (
      email.trim() === "" ||
      age.trim() === "" ||
      password.trim() === "" ||
      username.trim() === "" ||
      number.trim() === ""
    ) {
      setError("Please fill in all the fields.");
    } else if (!isStrongPassword(password)) {
      setError("Please enter a strong password combination.");
    } else {
      setError("");
      getlogin()
        .then(() => {
          window.location.href = "/"; 
        })
        .catch((error) => {
          console.error("Signup failed!", error);
          setError("An error occurred. Please try again later.");
        });
    }
  };

  return (
    <>
      <div className={`${registerstyle.register} custom-signup`}>
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="UserName"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <p className={basestyle.error}></p>
          <input
            type="number"
            name="Number"
            id="Number"
            placeholder="Mobile Number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            required
          />
          <p className={basestyle.error}></p>
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
            type="age"
            name="age"
            id="age"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
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
          <p className={basestyle.error}></p>
          {error && <p className="error">{error}</p>}
          <button className={basestyle.button_common} type="submit">
            Register
          </button>
        </form>
        <NavLink to="/">Already registered? Login</NavLink>
      </div>
    </>
  );
};

export default Signup;
