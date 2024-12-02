/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <div className="welcome-image">
        <img src="/asset5.svg" alt="Learning" />
      </div>
      <div className="welcome-text">
        <h2>Welcome to the Online & Offline Centers</h2>
        <ul>
          <li>Learn Anytime, Anywhere: Access our courses online at your convenience.</li>
          <li>Personalized Learning: Tailor your learning experience to your specific needs and goals.</li>
          <li>Expert Faculty: Learn from industry experts and experienced educators.</li>
          <li>Community and Networking: Connect with like-minded learners and build valuable professional relationships.</li>
          <li>Career Advancement: Gain the skills and knowledge to advance your career.</li>
        </ul>
      </div>
    </section>
  );
};

export default WelcomeSection;
