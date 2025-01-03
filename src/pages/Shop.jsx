import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import FilterProducts from "../components/FilterProducts";
import data from "../../data.json";
import AllProducts from "../components/AllProducts";

const Shop = () => {
  const [filterParams, setFilterParams] = useSearchParams();

  const concentration = filterParams.get("concentration");
  const fragrance = filterParams.get("fragrance");

  const filteredProducts = data.perfumes.filter(
    (product) =>
      (concentration &&
        product.concentration.toLowerCase() === concentration.toLowerCase()) ||
      (fragrance && product.fragrance.toLowerCase() === fragrance.toLowerCase())
  );
  return (
    <>
      <FilterProducts
        onFilterClick={setFilterParams}
        filterParams={filterParams}
      />
      <AllProducts
        products={filterParams.size > 0 ? filteredProducts : data.perfumes}
      />

      <Outlet />
    </>
  );
};

export default Shop;
