import React from "react";
import "./navbar.css";
import logo from "../../../assets/logo.png";
// import { Button } from "@mui/material";
import { Button } from "react-bootstrap";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logos">
        <img src={logo} alt="Company's logo" />
        <span className="logos-title">Terry's</span>
      </div>
      <div className="search">
        <input type="search" name="" id="" />
        <Button variant="primary">Button</Button>
      </div>
      <div className="extras"></div>
    </div>
  );
};

export default Navbar;
