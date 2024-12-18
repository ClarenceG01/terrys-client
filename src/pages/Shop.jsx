import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Products from "../components/Products";
import sauvage from "/sauvage.jpg";
import Product from "../components/Product";
import Box from "../components/Box";
import HeaderImage from "../components/HeaderImage";
import FilterProducts from "../components/FilterProducts";
import data from "../../data.json";

const Shop = () => {
  const { pathname } = useLocation();
  const displayName = pathname.substring(1).toLocaleUpperCase();
  const [filterParams, setFilterParams] = useSearchParams();
  const concentration = filterParams.get("concentration");
  const fragrance = filterParams.get("fragrance");
  const filteredProducts = data.perfumes.filter(
    (product) => concentration && product.concentration
  );
  const renderProducts = () => {
    if (concentration || fragrance) {
      return filteredProducts.map((product) => (
        <Product
          key={product.id}
          imageUrl={sauvage}
          name={product.name}
          price={product.price}
        />
      ));
    }
    return data.perfumes.map((product) => (
      <Product
        key={product.id}
        imageUrl={sauvage}
        name={product.name}
        price={product.price}
      />
    ));
  };
  return (
    <>
      <HeaderImage imageUrl="/shop.jpg">{displayName}</HeaderImage>
      <Box>
        <FilterProducts />
      </Box>
      <Products>{renderProducts()}</Products>
    </>
  );
};

export default Shop;
