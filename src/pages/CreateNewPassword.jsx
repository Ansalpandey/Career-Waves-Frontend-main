// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const CreateNewPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://career-waves-education-t5b4.vercel.app/api/v1/users/register",
        formData
      );
      console.log("Form Submitted Successfully:", response.data);
      navigate("/ResetPassword");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="password-container">
      <div className="register-box">
        <h1 className="register-title">Create New Password</h1>
        <p className="register-subtitle">
          Use Combinations of Multiple letters to create strong password.
        </p>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={formData.password}
            onChange={handleChange}
            className="register-input"
            required
          />

          <button type="submit" className="register-button">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewPassword;
