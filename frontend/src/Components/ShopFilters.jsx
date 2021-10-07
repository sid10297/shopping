import BrandFilter from "./BrandFilter";
// import PriceFilter from "./PriceFilter";
// import ColorFilter from "./ColorFilter";
import AvailabilityFilter from "./AvailabilityFilter";

const ShopFilters = () => {
  return (
    <>
      <BrandFilter />
      {/* <PriceFilter />
      <ColorFilter /> */}
      <AvailabilityFilter />
    </>
  );
};

export default ShopFilters;
