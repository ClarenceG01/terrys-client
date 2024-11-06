import React from "react";
import poster from "/public/poster.svg";
import hero from "/public/hero.png";

const Hero = () => {
  return (
    <section className="flex items-center sm:flex-row sm:justify-evenly  flex-col-reverse bg-slate-200 w-4/5 sm:py-12 py-2 px-4 md:px-8 mx-auto rounded-3xl">
      <div className="flex flex-col items-start sm:w-1/2 md:animate-bounce">
        <img
          src={poster}
          alt="Woman applying spray"
          className="w-36 md:w-52 mb-2 md:mb-4"
        />
        <span className="font-poppins text-lg md:text-2xl mb-2 md:mb-4">
          Where Every Scent Tells a Story.
        </span>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-primary ease-in-out duration-300">
          Shop Now
        </button>
      </div>
      <img src={hero} alt="" className="sm:w-2/3 md:w-1/2 pb-8 sm:pb-0" />
    </section>
  );
};

export default Hero;
