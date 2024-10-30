import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Landing;
