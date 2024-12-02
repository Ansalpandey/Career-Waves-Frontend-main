/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/Contact.css"; // Import your CSS styling here
import axios from "axios"; // Import axios

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Send the form data to the server
    axios.post("https://career-waves-backend.vercel.app/api/v1/contactus", formData, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("Server Response:", response.data);
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We would love to hear from you. Please fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
            required
          />
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
        <p className="contact-footer">
          For immediate support, you can also reach us at{" "}
          <a href="mailto:support@careerwaveseducation.in" className="contact-link">
          support@careerwaveseducation.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUsPage;
