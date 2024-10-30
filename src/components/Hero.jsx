import React from "react";
import poster from "/public/poster.svg";
import hero from "/public/hero.png";

const Hero = () => {
  return (
    <section className="flex justify-evenly items-center bg-slate-200 w-4/5 py-12 px-8 mx-auto rounded-3xl">
      <div className="left-container">
        <img src={poster} alt="" className="poster" />
        <span>Where Every Scent Tells a Story.</span>
        <button className="leftcont-btn">Shop Now</button>
      </div>
      <div className="img-container">
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Hero;
