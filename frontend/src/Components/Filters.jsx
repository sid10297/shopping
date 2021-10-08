import { useEffect, useState } from "react";

const Filters = ({ onFiltersUpdate }) => {
  const [filters, setFilters] = useState({
    brand: "none",
    color: "none",
    includesOutOfStock: false,
  });

  useEffect(() => {
    onFiltersUpdate(filters);
  }, [filters, onFiltersUpdate]);

  return (
    <div style={{ margin: "2rem" }}>
      <div>
        <label htmlFor="brand">Brand</label> &nbsp;
        <select
          name="brand"
          onChange={(event) => {
            setFilters((prev_filters) => {
              return {
                ...prev_filters,
                brand: event.target.value,
              };
            });
          }}
          value={filters.brand}
        >
          <option value="none">None</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="lotto">Lotto</option>
        </select>
      </div>

      <div>
        <label htmlFor="color">Color</label> &nbsp;
        <select
          name="color"
          onChange={(event) => {
            setFilters((prev_filters) => {
              return {
                ...prev_filters,
                color: event.target.value,
              };
            });
          }}
          value={filters.color}
        >
          <option value="none">None</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
          <option value="grey">Grey</option>
          <option value="brown">Brown</option>
        </select>
      </div>

      <div>
        <label htmlFor="availability">Include out of stock</label> &nbsp;
        <input
          type="checkbox"
          name="availability"
          onChange={() => {
            setFilters((prev_filters) => {
              return {
                ...prev_filters,
                includesOutOfStock: !prev_filters.includesOutOfStock,
              };
            });
          }}
        />
      </div>

      <button
        onClick={() => {
          setFilters({
            brand: "none",
            color: "none",
            includesOutOfStock: false,
          });
        }}
      >
        Clear all filters
      </button>
    </div>
  );
};

export default Filters;
