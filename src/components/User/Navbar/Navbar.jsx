import React from "react";
import "./navbar.css";
import logo from "../../../../public/logo.png";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" bg-red-500">
      <div className="logos">
        <img src={logo} alt="Company's logo" />
        <span className="logos-title">Terry's</span>
      </div>
      <div className="search">
        <input type="text" name="" id="" />
        <IoSearch className="search-icon" />
      </div>
      <div className="extras">
        <NavLink to="/">Home</NavLink>
        <RiShoppingCartLine className="cart" />
      </div>
    </div>
  );
};

export default Navbar;
