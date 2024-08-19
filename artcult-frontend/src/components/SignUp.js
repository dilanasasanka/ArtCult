// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Change import here
import './SignIn.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Change here

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/user/signup', {
        username,
        email,
        password,
      });

      console.log('Signup successful:', response.data);

      // Optionally, you can redirect to the login page after successful signup
      navigate('/signin'); // Change here
    } catch (error) {
      console.error('Error during signup:', error.response.data);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <img src="../assets/artcult-logo.png" alt="ArtCult Logo" className="logo" />
        <h2 className="signin-text">Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
        <button onClick={handleSignUp} className="login-button">
          SIGN UP
        </button>
      </div>
      <p>Already have an account? <Link className="signin-link" to="/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUp;
