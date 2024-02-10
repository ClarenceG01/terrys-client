import "./navbar.css";
import React from "react";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Button from "@mui/material/Button";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Company's logo" />
        <span className="logo-title">Terry's</span>
      </div>
      <div className="nav-links">
        <a href="#new-arrivals">New Arrivals</a>
        <a href="">Best Sellers</a>
        <a href="">Shop</a>
        <a href="#promo">Contact Us</a>
        <Button
          onClick={handleLogin}
          variant="contained"
          sx={{
            borderRadius: "7px",
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: " #EBD96B;", // Change the background color on hover
              color: "white", // Change the text color on hover
            },
          }}
        >
          Login
        </Button>
        <FaBars className="menu-bar" />
      </div>
    </div>
  );
};

export default Navbar;
