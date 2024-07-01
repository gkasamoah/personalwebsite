// src/Contact.js
import React, { useState } from 'react';
import '../components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend or email service)
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-grid">
        <div className="contact-info">
          <h2>My Contacts</h2>
          <p>Email: www.gkasamoah56@gmail.com</p>
          <p>Phone:0544118351 </p>
          <p>LinkedIn: <a href="https://linkedin.com/in/asamoahgregory">Your LinkedIn Profile</a></p>
          <p>GitHub: <a href="https://github.com/gkasamoah">Your GitHub Profile</a></p>
        </div>
        <div className="contact-form-section">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
