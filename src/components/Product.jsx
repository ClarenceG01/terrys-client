import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Product = ({ name, image }) => {
  const navigate = useNavigate();
  const handleExplore = () => {
    navigate("/shop");
  };
  return (
    <div className="border-2 border-slate-200 py-3 px-2 font-poppins w-full mx-auto">
      <img src={image} alt="" className="h-3/4 mx-auto mb-1" />
      <div className="h-1/4 flex flex-col justify-between">
        <span className="text-xl">{name}</span>
        <div
          onClick={handleExplore}
          className="flex items-center cursor-pointer justify-end"
        >
          <span className="explore">Explore product</span>
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default Product;
