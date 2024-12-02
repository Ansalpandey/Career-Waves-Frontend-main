/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import Feeter from "../components/Feeter";
import UniversityCards from "../components/Courses-Cards";

function Courses(){
    return(
        <div>
            <Header />
            <UniversityCards />
            <Footer />
            <Feeter />
        </div>
    )
}

export default Courses;