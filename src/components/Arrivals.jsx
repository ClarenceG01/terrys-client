import React from "react";
import AllProducts from "./AllProducts";
import data from "../../data.json";

const Arrivals = () => {
  return (
    <div className="font-poppins" id="new-arrivals">
      <p className=" text-2xl md:text-3xl ml-12 mb-6 text-gray-800 font-bold">
        Fresh Arrivals
      </p>
      <AllProducts products={data.perfumes} />
    </div>
  );
};

export default Arrivals;
