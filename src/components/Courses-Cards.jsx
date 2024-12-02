// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../styles/Courses-Cards.css";
import axios from "axios";

const UniversityCards = () => {
  const [universities, setUniversities] = useState([]); // State to store university data
  const [error, setError] = useState(null); // State to store errors
  const [loading, setLoading] = useState(true); // State to manage loading state
  const navigate = useNavigate(); // React Router's navigation hook

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          "https://career-waves-backend.vercel.app/api/v1/universities/",
          { withCredentials: true }
        );
        setUniversities(response.data);
        if (response.data.length === 0) {
          setError("No universities found.");
        }
      } catch (err) {
        setError("Failed to load universities.");
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  return (
    <div className="courses__container">
      <h2>Universities</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="courses__grid">
        {universities.map((university) => (
          <article key={university._id} className="course">
            <div className="course__image">
              <img
                src={university.coverImage || "default-image.jpg"}
                alt={university.name}
              />
            </div>
            <div className="course__info">
              <h4>{university.name}</h4>
              <p>{university.description?.substring(0, 100) || "No description available."}...</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/university/${university._id}`)}
              >
                Learn More
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default UniversityCards;
