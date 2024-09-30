/**
 * File: Services.js
 * Author: Jhon Vasquez
 * Student ID: 300901949
 * Date: September 28, 2024
 */

import React from 'react';
import '../components/Services.css'; 

const Services = () => {
  return (
    <div className="services-page">
      <h2 className="services-title">My Services</h2>
      <div className="services-container">
        {/* Service 1 */}
        <div className="service-card">
          <img src="/images/service2.jpg" alt="Web Development" className="service-image" />
          <h3>Web Development</h3>
          <p>
            I offer full-stack web development services including design, frontend, and backend 
            development. I work with the latest technologies to bring your ideas to life.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <img src="/images/service1.jpg" alt="Photography" className="service-image" />
          <h3>Photography</h3>
          <p>
            Specializing in product and food photography, I help brands showcase their products 
            with stunning visuals that capture attention and drive sales.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <img src="/images/service3.jpg" alt="Graphic Design" className="service-image" />
          <h3>Graphic Design</h3>
          <p>
            From branding to packaging, I provide creative and professional graphic design services
            that align with your brand identity and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

