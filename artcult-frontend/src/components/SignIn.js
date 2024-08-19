// src/components/SignIn.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Change import here
import { useAuth } from '../AuthContext';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate(); // Change here

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/user/signin', {
        email,
        password,
      });

      console.log('Login successful:', response.data);

      // Save token and user info in your frontend state or local storage
      login(response.data);
      navigate('/'); // Change here
    } catch (error) {
      console.error('Error during login:', error.response.data);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <img src="../assets/artcult-logo.png" alt="ArtCult Logo" className="logo" />
        <h2 className="signin-text">Sign In</h2>
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
        <button onClick={handleLogin} className="login-button">
          SIGN IN
        </button>
      </div>
      <p>New to ArtCult? <Link className="signin-link" to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
