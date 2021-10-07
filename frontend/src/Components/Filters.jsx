import { useEffect, useState } from "react";

const Filters = ({ onFiltersUpdate }) => {
  const [filters, setFilters] = useState({
    brand: "none",
    includesOutOfStock: false,
  });

  useEffect(() => {
    onFiltersUpdate(filters);
  }, [filters, onFiltersUpdate]);

  return (
    <div>
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
    </div>
  );
};

export default Filters;
