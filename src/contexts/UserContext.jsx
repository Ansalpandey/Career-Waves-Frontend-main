import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // Loading state to manage fetching
  const [error, setError] = useState(null);      // Error state for handling errors

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://career-waves-backend.vercel.app/api/v1/users/me",
          {
            withCredentials: true, // Sends the stored JWT token cookie
          }
        );
        setUser(response.data); // Update state with the fetched user
        setLoading(false);       // Set loading to false when data is fetched
      } catch (error) {
        setError("Error fetching user profile"); // Update error state if there is an issue
        setLoading(false); // Stop loading if there's an error
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
