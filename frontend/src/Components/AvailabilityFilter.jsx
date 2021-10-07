import { useContext, useState } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";

const AvailabilityFilter = () => {
  const [selectOption, setSelectOption] = useState("");
  const { selectAvailabiity, getAvailabilityFilter } =
    useContext(ProductsContext);

  const handleChange = (e) => {
    const val = e.target.value;
    setSelectOption(val);
    // selectAvailabiity(val);
    getAvailabilityFilter(val);
  };

  return (
    <form>
      <label htmlFor="availability">Availability</label> &nbsp;
      <select name="availability" value={selectOption} onChange={handleChange}>
        <option value="none">None</option>
        <option value="all">All</option>
        <option value="in-stock">In stock</option>
        <option value="out-of-stock">Out of stock</option>
      </select>
    </form>
  );
};

export default AvailabilityFilter;
