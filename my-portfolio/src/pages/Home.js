/**
 * File: Home.js
 * Author: Jhon Vasquez
 * Student ID: 300901949
 * Date: September 28, 2024
 */

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Vasco Studio</h1>
        <p>Your one-stop solution for design, photography, and frontend development</p>
        <div className="cta-buttons">
          <button onClick={() => window.location.href = '/about'}>Learn More About Me</button>
          <button onClick={() => window.location.href = '/projects'}>See My Work</button>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mission-statement">
        <h2>My Mission</h2>
        <p>
          At Vasco Studio, our mission is to deliver stunning visuals and intuitive interfaces. We blend creativity with functionality to craft experiences that leave a lasting impression.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Services I Offer</h2>
        <div className="service-boxes">
          <div className="service-box">
            <h3>Design</h3>
            <p>Beautiful, user-centered designs for web and mobile.</p>
          </div>
          <div className="service-box">
            <h3>Photography</h3>
            <p>Capturing moments with an artistic touch.</p>
          </div>
          <div className="service-box">
            <h3>Frontend Development</h3>
            <p>Responsive, fast, and dynamic websites built to last.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
