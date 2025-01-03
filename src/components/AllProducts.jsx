import React from "react";
import Product from "./Product";

export default function AllProducts({ products }) {
  console.log("products length" + products.length);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4 px-10 md:px-14">
      {products.length > 0 ? (
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
        ))
      ) : (
        <h1>No filteredProducts</h1>
      )}
    </div>
  );
}
