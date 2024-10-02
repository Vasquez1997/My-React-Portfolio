/**
 * File: About.js
 * Author: Jhon Vasquez
 * Student ID: 300901949
 * Date: September 28, 2024
 */

import React from 'react';
import './About.css';  

const About = () => {
  return (
    <div className="about-container">
      {/* Section with Image and Name */}
      <section className="about-header">
        <img src="/profilepic.jpeg" alt="Jhon Vasquez" className="about-image" />
        <h1>Jhon Vasquez</h1>
      </section>

      {/* About Paragraph */}
      <section className="about-info">
        <p>
          I am a passionate designer, photographer, and front-end developer, committed to crafting beautiful and functional web and visual experiences. With a background in both design and development, I bring a unique approach to every project, blending creativity and technology seamlessly.
        </p>
      </section>

      {/* Resume Link */}
      <section className="resume-section">
  <a href="/images/Jhon Vasquez Resume.pdf" target="_blank" rel="noopener noreferrer" download>
    Download My Resume
  </a>
</section>

    </div>
  );
};

export default About;



