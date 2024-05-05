import React from "react";
import "./navbar.css";
import logo from "../../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logos">
        <img src={logo} alt="Company's logo" />
        <span className="logos-title">Terry's</span>
      </div>
      <div className="search">
        <input type="text" name="" id="" />
        <IoSearch className="search-icon" />
      </div>
      <div className="extras">
        <a href="#new-arrivals">Home</a>
        <RiShoppingCartLine className="cart" />
      </div>
    </div>
  );
};

export default Navbar;
