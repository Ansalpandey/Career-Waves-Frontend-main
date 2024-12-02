import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/UniversityDetail.css";

const UniversityDetail = () => {
  const { id } = useParams(); // Get the university ID from the URL
  const [university, setUniversity] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const response = await axios.get(
          `https://career-waves-backend.vercel.app/api/v1/universities/universityId/${id}`,
          { withCredentials: true }
        );
        setUniversity(response.data);
      } catch (err) {
        setError("Failed to load university details.");
      } finally {
        setLoading(false);
      }
    };

    fetchUniversity();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="university__detail">
      <img src={university.coverImage || "default-image.jpg"} alt={university.name} />
      <h2>{university.name}</h2>
      <p>{university.description}</p>
    </div>
  );
};

export default UniversityDetail;