import { useContext, useState } from "react";
import ProductsContext from "../Contexts/ProductsContext";

const ShopFilters = () => {
  const [optionsState, setOptionsState] = useState("all");
  const { selectAction } = useContext(ProductsContext);

  const handleBrandsSelect = (e) => {
    const val = e.target.value;
    setOptionsState(val);
    selectAction(val);
  };

  return (
    <form>
      <label htmlFor="brands">Brands</label>
      <select name="brands" onChange={handleBrandsSelect} value={optionsState}>
        <option value="all">All</option>
        <option value="adidas">Adidas</option>z
        <option value="nike">Nike</option>
        <option value="lotto">Lotto</option>
      </select>
    </form>
  );
};

export default ShopFilters;
