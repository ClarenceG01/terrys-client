import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";

const FilterProducts = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const { removeQueryParams } = useQueryParams();

  const handleFilterChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
    if (event.target.value === "all") {
      removeQueryParams();
    }
  };
  const renderButtons = () => {
    if (filter === "all") return null;

    const options =
      filter === "fragrance"
        ? ["Floral", "Woody", "Fruity", "Oriental", "Fresh"]
        : [
            "Parfum",
            "Eau de Parfum",
            "Eau de Toilette",
            "Eau de Cologne",
            "Perfume Oil",
            "Body Mist",
          ];

    return options.map((option, index) => (
      <NavLink
        className="text-sm bg-white border-2 border-black rounded-md p-1 md:py-2 md:px-1 text-secondary & hover:bg-secondary hover:text-white"
        key={index}
        to={`?${filter}=${option}`}
        end={index === 0}
      >
        {option}
      </NavLink>
    ));
  };
  return (
    <div className="flex flex-col md:flex-row justify-evenly md:justify-between md:items-center h-full">
      <div>
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" name="filter" onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="fragrance">Fragrance Family</option>
          <option value="concentration">Concentration</option>
        </select>
      </div>
      <div className="flex justify-evenly w-full md:w-1/3">
        {renderButtons()}
      </div>
    </div>
  );
};

export default FilterProducts;
