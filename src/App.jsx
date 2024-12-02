/* eslint-disable no-unused-vars */
// App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";
import Feeter from "./components/Feeter";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <Footer />
      <Feeter />
    </div>
  );
}

export default App;
