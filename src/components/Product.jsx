import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ id, name, image, scent, discountedPrice, price }) => {
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`${id}`);
  };
  return (
    <div
      className="relative bg-slate-100 font-poppins w-full md:h-96 mx-auto  shadow-lg shadow-slate-500/50 cursor-pointer group"
      onClick={handleProductClick}
    >
      <img src={image} alt="" className="h-3/4 w-full" />
      <div className=" h-1/4 flex flex-col justify-between pt-2 pb-8 px-2">
        <span className="text-xl xl:text-2xl">{name}</span>
        <div>
          <span className="text-gray-800 text-lg">{scent}</span>
          <div className="flex justify-between">
            <span>Ksh {discountedPrice}</span>
            <span className="text-gray-600 line-through">Ksh {price}</span>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-slate-900 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="px-4 py-2 bg-white text-lg text-primary  font-bold rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
