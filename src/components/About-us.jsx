// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/AboutUs.css"; // Import the CSS for styling

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and team.</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <img
            src="https://images.unsplash.com/photo-1549737221-bef65e2604a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mission"
            className="about-image"
          />
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission at Career Waves is to deliver high-quality education
              and resources that enable individuals to cultivate their skills,
              pursue their passions, and achieve their goals. We are dedicated
              to fostering an environment where learning and continuous
              development thrive. By empowering individuals through tailored
              educational solutions, we aim to inspire confidence and
              capability, ensuring that every learner is equipped with the
              knowledge and tools necessary for success. We believe that
              education is a lifelong journey, and we are committed to
              supporting our clients every step of the way as they navigate
              their personal and professional growth.
            </p>
          </div>
        </div>

        <div className="about-section">
          <img
            src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vision"
            className="about-image"
          />
          <div className="about-text">
            <h2>Our Vision</h2>
            <p>
              At Career Waves Institute, we envision a world where all
              individuals have equitable access to the knowledge and resources
              necessary for success. Our commitment is to cultivate a supportive
              and engaging environment that promotes growth, creativity, and
              innovation. We strive to empower our clients by providing them
              with the tools and expertise needed to thrive in their educational
              pursuits.
            </p>
          </div>
        </div>

        <div className="about-section">
          <img
            src="https://plus.unsplash.com/premium_photo-1664299134699-094c9bf57996?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team"
            className="about-image"
          />
          <div className="about-text">
            <h2>Our Team</h2>
            <p>
              At Career Waves Institute, we are a dedicated team of passionate
              educators, committed to making learning accessible and enjoyable
              for everyone. Since our establishment in 2007, we have combined
              our diverse expertise across various fields to provide
              high-quality educational resources tailored to meet the needs of
              learners. Our mission is to empower individuals through innovative
              educational solutions, fostering a love for learning that lasts a
              lifetime. We believe that education should be inclusive, engaging,
              and adaptable, which is why we continuously strive to enhance our
              offerings. With a focus on collaboration and continuous
              improvement, we are proud to serve as trusted partners in the
              educational journey of our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
