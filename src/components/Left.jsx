import React from "react";
import hero from "/public/hero.png";

const Left = () => {
  return (
    <section className="hidden md:flex flex-col justify-center items-center w-1/2 h-screen bg-gradient-to-b from-[rgb(246,214,2,0.8)] via-[rgb(218,193,40,0.8)] to-[rgb(156,143,63,0.8)] bg-opacity-0">
      <img src={hero} alt="Woman applying spray" className="mb-4" />
      <span className="text-white text-lg md:text-4xl font-bodoni">
        Terry's
      </span>
    </section>
  );
};

export default Left;
