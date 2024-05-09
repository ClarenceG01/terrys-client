import React from "react";
import "./home.css";
import hero from "../../../assets/hero.png";
import poster from "../../../assets/poster.svg";
import boss from "../../../assets/boss.png";
import chan from "../../../assets/chan.png";
import dg from "../../../assets/d&g.png";
import dior from "../../../assets/dior.png";
import giv from "../../../assets/giv.png";
import vs from "../../../assets/vs.png";
import sample from "../../../assets/sample.jpg";
import Button from "@mui/material/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleExplore = () => {
    navigate("/shop");
  };
  return (
    <div className="home">
      <section className="hero-section">
        <div className="left-container">
          <img src={poster} alt="" className="poster" />
          <span>Where Every Scent Tells a Story.</span>
          <button className="leftcont-btn">Shop Now</button>
        </div>
        <div className="img-container">
          <img src={hero} alt="" />
        </div>
      </section>
      <section className="few-products" id="new-arrivals">
        <section className="brands-list">
          <img src={boss} alt="" />
          <img src={chan} alt="" />
          <img src={dg} alt="" />
          <img src={dior} alt="" />
          <img src={giv} alt="" />
          <img src={vs} alt="" />
        </section>
        <p>Fresh Arrivals</p>
        <div className="fresh-arrivals">
          <div className="product-container">
            <img src={sample} alt="" />
            <span className="product-name">Tresor Midnight Rose</span>
            <span className="explore" onClick={handleExplore}>
              Explore product
              <FaArrowRightLong className="arrow-icon" />
            </span>
          </div>
          <div className="product-container">
            <img src={sample} alt="" />
            <span className="product-name">Tresor Midnight Rose</span>
            <span className="explore" onClick={handleExplore}>
              Explore product
              <FaArrowRightLong className="arrow-icon" />
            </span>
          </div>
          <div className="product-container">
            <img src={sample} alt="" />
            <span className="product-name">Tresor Midnight Rose</span>
            <span className="explore" onClick={handleExplore}>
              Explore product
              <FaArrowRightLong className="arrow-icon" />
            </span>
          </div>
          <div className="product-container">
            <img src={sample} alt="" />
            <span className="product-name">Tresor Midnight Rose</span>
            <span className="explore" onClick={handleExplore}>
              Explore product
              <FaArrowRightLong className="arrow-icon" />
            </span>
          </div>
          <div className="product-container">
            <img src={sample} alt="" />
            <span className="product-name">Tresor Midnight Rose</span>
            <span className="explore" onClick={handleExplore}>
              Explore product
              <FaArrowRightLong className="arrow-icon" />
            </span>
          </div>
        </div>
      </section>
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
            <Button
              variant="contained"
              sx={{
                borderRadius: "7px",
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: " #EBD96B;", // Change the background color on hover
                  color: "white", // Change the text color on hover
                },
              }}
            >
              SEND
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
