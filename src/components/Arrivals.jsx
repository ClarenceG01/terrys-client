import React from "react";
import Product from "./Product";
import sauvage from "/public/sauvage.jpg";
import Products from "./Products";

const Arrivals = () => {
  return (
    <div className="py-4 px-24">
      <p className="font-poppins text-3xl mb-6">Fresh Arrivals</p>
      <Products>
        <Product name="Sauvage Dior EDP" image={sauvage} />
        <Product name="Creed Aventus" image={sauvage} />
        <Product name="Versace Eros" image={sauvage} />
        <Product name="ALLURE HOMME" image={sauvage} />
      </Products>
    </div>
  );
};

export default Arrivals;
