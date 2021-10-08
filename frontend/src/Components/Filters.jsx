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
  });

  useEffect(() => {
    onFiltersUpdate(filters);
  }, [filters, onFiltersUpdate]);

  return (
    <div style={{ margin: "2rem" }}>
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

      <InputLabel htmlFor="color">Color</InputLabel>
      <Select
        style={{ width: "100%" }}
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
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="black">Black</MenuItem>
        <MenuItem value="blue">Blue</MenuItem>
        <MenuItem value="grey">Grey</MenuItem>
        <MenuItem value="white">White</MenuItem>
      </Select>

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

      <Button
        variant="contained"
        onClick={() => {
          setFilters({
            brand: "none",
            color: "none",
            includesOutOfStock: false,
          });
        }}
      >
        Clear all filters
      </Button>
    </div>
  );
};

export default Filters;
