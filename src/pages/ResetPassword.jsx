// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
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
        "https://career-waves-backend.vercel.app/api/v1/users/register",
        formData
      );
      console.log("Form Submitted Successfully:", response.data);
      navigate("/ResetPassword");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "60vh",
      background: "radial-gradient(circle at top, #2a1d52, #1a1738, #0f0e1f)",
      padding: "50px",
      position: "relative",
      top: "125px",
      }}>
      <div className="reset-box">
        <h1 className="register-title">Reset Password</h1>
        <p className="register-subtitle">
          Type your email to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="email"
            name="email"
            placeholder="Username or Email"
            value={formData.email}
            onChange={handleChange}
            className="register-input"
            required
          />

          <button type="submit" className="register-button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
