import React from "react";
import boss from "/public/boss.png";
import chan from "/public/chan.png";
import dg from "/public/d&g.png";
import dior from "/public/dior.png";
import giv from "/public/giv.png";
import vs from "/public/vs.png";

const Brands = () => {
  return (
    <section className="hidden md:flex md:justify-evenly md:items-center bg-primary h-24 my-10">
      <img className="max-h-16" src={boss} alt="" />
      <img className="max-h-16" src={chan} alt="" />
      <img className="max-h-16" src={dg} alt="" />
      <img className="max-h-16" src={dior} alt="" />
      <img className="max-h-16" src={giv} alt="" />
      <img className="max-h-16" src={vs} alt="" />
    </section>
  );
};

export default Brands;
