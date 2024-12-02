/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "../styles/Register.css";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext"; // Ensure this import is correct

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
        "https://career-waves-backend.vercel.app/api/v1/users/login",
        formData,
        { withCredentials: true }
      );
      setUser(response.data.user); // Update context with user data
      navigate("/"); // Redirect to home page after login
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className=""
      style={{
        position: "relative",
        bottom: "-77px",
        height: "0vh",
        padding: "50px",
      }}
    >
      <div className="register-box">
        <h1 className="register-title">Welcome, Sir!</h1>
        <p className="register-subtitle">
          We are excited to see you again. Login now and access your account.
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

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="register-input"
            required
          />
          <Link to="/ResetPassword" className="register-forgot">
            Forgot Password?
          </Link>
          <button type="submit" className="register-button">
            Login
          </button>
          <p className="register-or">or</p>
          <p className="register-footer">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="register-link">
              Register
            </Link>
          </p>
        </form>
        <a href="contact-us" className="register-support">
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
