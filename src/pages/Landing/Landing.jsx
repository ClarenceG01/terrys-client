import React from "react";
import Navbar from "../../components/General/Navbar/Navbar";
import Home from "../../components/General/Home/Home";
import Footer from "../../components/General/Footer/Footer";

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
