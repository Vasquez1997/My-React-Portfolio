/**
 * File: Navbar.js
 * Author: Jhon Vasquez
 * Student ID: 300901949
 * Date: September 28, 2024
 */

import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/mylogo.jpg" alt="Vasco Studio Logo" className="logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
