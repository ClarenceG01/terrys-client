import React from "react";
import Product from "./Product";
import sauvage from "/sauvage.jpg";
import Products from "./Products";

const Arrivals = () => {
  return (
    <div className="font-poppins">
      <p className=" text-2xl md:text-3xl ml-12 mb-6 text-gray-800 font-bold">
        Fresh Arrivals
      </p>
      <div className="">
        <Products>
          <Product
            name="Sauvage Dior EDP"
            image={sauvage}
            scent="Floral"
            discountedPrice="4500"
            price="5000"
          />
          <Product
            name="Sauvage Dior EDP"
            image={sauvage}
            scent="Floral"
            discountedPrice="4500"
            price="5000"
          />
          <Product
            name="Sauvage Dior EDP"
            image={sauvage}
            scent="Floral"
            discountedPrice="4500"
            price="5000"
          />
          <Product
            name="Sauvage Dior EDP"
            image={sauvage}
            scent="Floral"
            discountedPrice="4500"
            price="5000"
          />
          {/* <Product name="Creed Aventus" image={sauvage} /> */}
          {/* <Product name="Versace Eros" image={sauvage} /> */}
          {/* <Product name="ALLURE HOMME" image={sauvage} /> */}
        </Products>
      </div>
    </div>
  );
};

export default Arrivals;
