import React from "react";
import "./home.css";

import Button from "@mui/material/Button";

import Hero from "../Hero";
import Brands from "../Brands";
import Arrivals from "../Arrivals";

const Home = () => {
  return (
    <div className="py-4">
      <Hero />
      <Brands />
      <Arrivals />
      {/* <section className="few-products" id="new-arrivals"> */}
      {/* </section> */}
      <section className="join-community" id="promo">
        <div className="words">
          <span className="titl">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </span>
          <span className="sub-title">
            Type your email down below and be young wild generation
          </span>
          <div className="add-mail">
            <span>Add your email here</span>
            <button className="bg-black text-white hover:bg-primary rounded-lg px-4 py-2">
              SEND
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
