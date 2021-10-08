import {
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
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

      {/* <div>
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
      </div> */}

      {/* <div>
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
      </div> */}

      <FormControlLabel
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

      {/* <div>
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
      </div> */}

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
