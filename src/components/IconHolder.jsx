import React from "react";
import { NavLink } from "react-router-dom";

const IconHolder = ({ children, end, to }) => {
  console.log(to);
  return (
    <NavLink
      className="w-12 h-12 rounded-lg  bg-opacity-55 shadow-icon flex justify-center items-center my-3"
      to={to}
      style={({ isActive }) =>
        isActive
          ? {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 0 5px 5px rgba(255, 255, 255, 0.3)",
              borderRadius: "50px",
            }
          : null
      }
      end={end}
    >
      {children}
    </NavLink>
  );
};

export default IconHolder;
