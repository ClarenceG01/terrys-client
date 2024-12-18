import React from "react";

const Products = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4 px-10 md:px-14">
      {children}
    </div>
  );
};

export default Products;
