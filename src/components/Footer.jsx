import React from "react";
import facebook from "/f.svg";
import ig from "/ig.svg";
import twitter from "/twitter.svg";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:justify-evenly bg-black pt-12 pb-20 px-10 text-white font-roboto ">
      <div className="flex flex-col justify-between h-32 md:h-44 mb-8 ">
        <span className="text-4xl md:text-5xl font-poppins">Terrys</span>
        <p className="text-lg md:text-xl">
          Elevate Your Scent, Embrace Your Essence
        </p>
        <div className="flex justify-between  w-1/3">
          <img src={facebook} alt="fb logo" className="mr-4" />
          <img src={ig} alt="ig logo" className="mr-4" />
          <img src={twitter} alt="twitter logo" className="mr-4" />
        </div>
      </div>
      <div className="flex justify-start h-28">
        <ul className="flex flex-col justify-between mr-12">
          <span className="text-xl md:text-2xl underline-offset-8 underline mb-4">
            Company
          </span>
          <li className="text-lg md:text-xl cursor-pointer">About</li>
          <li className="text-lg md:text-xl cursor-pointer">Contact us</li>
          <li className="text-lg md:text-xl cursor-pointer">Careers</li>
        </ul>
        <ul className="flex flex-col justify-between">
          <span className="text-xl md:text-2xl underline-offset-8 underline mb-4">
            Legal
          </span>
          <li className="text-lg md:text-xl cursor-pointer">
            Terms & Conditions
          </li>
          <li className="text-lg md:text-xl cursor-pointer">Privacy Policy</li>
          <li className="text-lg md:text-xl cursor-pointer">FAQs</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
