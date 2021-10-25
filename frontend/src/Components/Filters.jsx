import {
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";

const Filters = ({ onFiltersUpdate }) => {
  const [filters, setFilters] = useState({
    brand: "none",
    color: "none",
    includesOutOfStock: false,
    sortBy: "none",
    customerRatings: "none",
  });

  useEffect(() => {
    onFiltersUpdate(filters);
  }, [filters, onFiltersUpdate]);

  return (
    <div style={{ margin: "1rem" }}>
      <InputLabel htmlFor="brand">Brand</InputLabel>
      <Select
        style={{ width: "100%" }}
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
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="nike">Nike</MenuItem>
        <MenuItem value="adidas">Adidas</MenuItem>
        <MenuItem value="lotto">Lotto</MenuItem>
      </Select>

      <br />
      <br />

      <InputLabel htmlFor="sortBy">Sort By</InputLabel>
      <Select
        style={{ width: "100%" }}
        name="sortBy"
        onChange={(event) => {
          setFilters((prev_filters) => {
            return {
              ...prev_filters,
              sortBy: event.target.value,
            };
          });
        }}
        value={filters.sortBy}
      >
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="highToLow">High to Low</MenuItem>
        <MenuItem value="lowToHigh">Low to High</MenuItem>
      </Select>

      <br />
      <br />

      <FormControlLabel
        checked={filters.includesOutOfStock}
        control={
          <Checkbox
            onChange={() => {
              setFilters((prev_filters) => {
                return {
                  ...prev_filters,
                  includesOutOfStock: !prev_filters.includesOutOfStock,
                };
              });
            }}
          />
        }
        label="Include Out of Stock"
      />

      <br />
      <br />
      <Button
        variant="contained"
        onClick={() => {
          setFilters({
            brand: "none",
            color: "none",
            includesOutOfStock: false,
            sortBy: "none",
            customerRatings: "none",
          });
        }}
      >
        Clear all filters
      </Button>
    </div>
  );
};

export default Filters;
