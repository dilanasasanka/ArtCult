// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src="../assets/artcult-logo.png" alt="ArtCult Logo" /></Link>
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
      <div className="user-options">
        {/* Add logic for showing Sign Up when not logged in and Cart when logged in */}
        <Link id="signup" to="/signin">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
