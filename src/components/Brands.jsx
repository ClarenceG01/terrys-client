import React from "react";
import boss from "/boss.png";
import chan from "/chan.png";
import dg from "/d&g.png";
import dior from "/dior.png";
import giv from "/giv.png";
import vs from "/vs.png";

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
