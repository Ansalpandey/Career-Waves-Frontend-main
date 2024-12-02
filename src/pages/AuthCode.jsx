/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/VerifyCode.css";

const VerifyCodePage = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value.slice(-1); // Only keep the last typed digit
    if (value.match(/[0-9]/)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input
      if (index < 5 && value) {
        e.target.nextSibling.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      console.log("Submitted Code:", verificationCode);
      navigate("/"); // Redirect to home page or next step
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  return (
    <div className="verify-container">
      <div className="verify-box">
        <h1 className="verify-title">Verify Your Code</h1>
        <p className="verify-subtitle">
          Enter the passcode you just received on your email address ending with
          ******@gmail.com
        </p>
        <form onSubmit={handleSubmit} className="verify-form">
          <div className="code-inputs">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                maxLength="1"
                onChange={(e) => handleChange(e, index)}
                className="verify-input"
                required
              />
            ))}
          </div>
          <button type="submit" className="verify-button">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyCodePage;
