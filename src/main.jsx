import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import AuthCode from "./pages/AuthCode";
import { UserProvider } from "./contexts/UserContext";
import "./styles/index.css";
import ContactUsPage from "./pages/ContactUs";
import UniversityDetail from "./components/UniversityDetails";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main App with all sections
  },
  {
    path: "/universities",
    element: <Courses />, // Courses page
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/create-new-password",
    element: <CreateNewPassword />,
  },
  {
    path: "/auth-code",
    element: <AuthCode />,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "/university/:id",
    element: <UniversityDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </UserProvider>
);
