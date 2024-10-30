import React from "react";
import Navbar from "../components/User/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="main-shop">
        <section className="sidebar-categories"></section>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
