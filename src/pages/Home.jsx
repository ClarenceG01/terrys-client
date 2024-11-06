import React from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Arrivals from "../components/Arrivals";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <Arrivals />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
