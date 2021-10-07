import { useState } from "react";

const Filters = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [availability, setAvailability] = useState(false);

  return (
    <div>
      <div>
        <label htmlFor="brand">Brand</label> &nbsp;
        <select
          name="brand"
          onChange={(event) => setSelectedBrand(event.target.value)}
          value={selectedBrand}
        >
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="lotto">Lotto</option>
        </select>
        <button onClick={() => setSelectedBrand("")}>Clear Filter</button>
      </div>
      <div>
        <label htmlFor="availability">Inlcude out of stock</label> &nbsp;
        <input
          type="checkbox"
          name="availability"
          onChange={() => setAvailability(!availability)}
        />
      </div>
    </div>
  );
};

export default Filters;
