import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import UserProfile from "./UserProfile";

const AdminNav = () => {
  return (
    <div className="bg-accent bg-opacity-75 py-2 px-4 flex flex-row justify-between">
      <Link to="." className=" cursor-pointer flex flex-row items-center">
        <img src={logo} alt="logo" className="w-12 h-12 mr-2" />
        <span className="text-lg text-white md:text-3xl font-bodoni">
          Terry's
        </span>
      </Link>
      <div>
        {/* profile picture or if no picture, UserProfile */}
        <UserProfile username="Admin" />
      </div>
    </div>
  );
};

export default AdminNav;
