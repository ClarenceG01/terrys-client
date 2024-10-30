import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Product = ({ name, image }) => {
  const navigate = useNavigate();
  const handleExplore = () => {
    navigate("/shop");
  };
  return (
    <div className="border-2 border-slate-200 py-4 px-2 font-poppins">
      <img src={image} alt="" className="h-3/4" />
      <div className="h-1/4 flex flex-col">
        <span className="text-xl">{name}</span>
        <div className="flex justify-between items-center">
          <span className="explore" onClick={handleExplore}>
            Explore product
          </span>
          <FaArrowRightLong className="arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default Product;
