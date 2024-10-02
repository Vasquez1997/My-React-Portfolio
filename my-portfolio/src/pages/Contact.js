/**
 * File: Contact.js
 * Author: Jhon Vasquez
 * Student ID: 300901949
 * Date: September 28, 2024
 */

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false); // New state for form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true); // Set form as submitted
  };

  return (
    <div className="contact-page">
      {submitted ? (
        <div className="confirmation-message">
          <h2>Thank you for reaching out!</h2>
          <p>We have received your message and will get back to you shortly.</p>
        </div>
      ) : (
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Me</h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Business Inquiry">Business Inquiry</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>

          {/* Contact Information Section */}
          <div className="contact-info">
            <h3>My Contact Information</h3>
            <p><strong>Email:</strong> jvasque7@mycentennialcollege.ca</p>
            <p><strong>Phone:</strong> +1 (647) 391-2049</p>
            <p><strong>Address:</strong> 2 Eva Rd, Toronto, ON, Canada</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

