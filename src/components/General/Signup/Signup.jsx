import React, { useState, useRef, useEffect } from "react";
import "./signup.css";
import { Outlet } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <section className="left-section"></section>
      <Outlet />
    </div>
  );
};

export default Signup;
