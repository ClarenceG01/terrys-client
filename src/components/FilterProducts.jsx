import { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import useQueryParams from "../hooks/useQueryParams";

const FilterProducts = ({ onFilterClick, filterParams }) => {
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
    const queryParams = new URLSearchParams(filterParams);
    return (
      <div className="flex flex-wrap items-center">
        {options.map((option, index) => {
          const isActive =
            queryParams.get(filter) === option ||
            (!queryParams.get(filter) && option === "all");
          return (
            <button
              key={index}
              onClick={() => onFilterClick({ [filter]: option })}
              className={`text-sm border-2 mr-1 border-black rounded-md p-1 md:py-2 md:px-1 text-secondary hover:bg-secondary hover:text-white ${
                isActive ? "bg-red-500 text-white" : "bg-white"
              }`}
            >
              {option}
            </button>
          );
        })}
        {queryParams.size === 0 ? null : (
          <button
            onClick={() => {
              removeQueryParams();
              setFilter("all");
            }}
            className={`flex flex-row items-center text-sm shadow-filter bg-white text-red-600 p-1 md:py-2 md:px-1 ml-2`}
          >
            <AiOutlineClear className="text-xl" />
            Clear
          </button>
        )}
      </div>
    );
  };
  return (
    <div className="flex flex-col md:flex-row justify-evenly md:justify-between md:items-center px-3 h-20 bg-primary ">
      <div>
        <label htmlFor="filter">Filter by:</label>
        <select
          id="filter"
          name="filter"
          onChange={handleFilterChange}
          value={filter}
        >
          <option value="all">All</option>
          <option value="fragrance">Fragrance Family</option>
          <option value="concentration">Concentration</option>
        </select>
      </div>
      {renderButtons()}
    </div>
  );
};

export default FilterProducts;
