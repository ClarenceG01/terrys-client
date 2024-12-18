import React from "react";
import logo from "/logo.png";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/user");
  };
  return (
    <div className="flex justify-between items-center py-4 px-4 ">
      <div
        className="flex items-center cursor-pointer space-x-2"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="Company's logo"
          className="
       w-8 md:w-12
        "
        />
        <span className="text-lg md:text-3xl font-bodoni">Terry's</span>
      </div>
      <div className="hidden md:flex md:items-center text-xl font-normal cursor-pointer space-x-6 nav-links">
        <a href="#new-arrivals">New Arrivals</a>
        <a href="">Best Sellers</a>
        <a href="">Shop</a>
        <a href="#promo">Contact Us</a>
        <button
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-primary"
        >
          Login
        </button>
      </div>
      <FaBars className="w-6 h-6 md:hidden" />
    </div>
  );
};

export default Navbar;
