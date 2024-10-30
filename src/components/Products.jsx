import React from "react";

const Products = ({ children }) => {
  return <div className="grid grid-cols-4 gap-4">{children}</div>;
};

export default Products;
