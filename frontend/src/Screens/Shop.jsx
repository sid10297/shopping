import { useCallback, useContext, useEffect, useState } from "react";
import Filters from "../Components/Filters";

import ProductsShop from "../Components/ProductsShop";
import { ProductsContext } from "../Contexts/ProductsContext";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const onFiltersUpdate = useCallback(
    (filters) => {
      let _filteredProducts = products;

      if (!filters.includesOutOfStock) {
        _filteredProducts = _filteredProducts.filter(
          (_product) => _product.quantityAvailable
        );
      }

      if (filters.brand === "none") {
        setFilteredProducts(_filteredProducts);
        return;
      }

      setFilteredProducts(
        _filteredProducts.filter(
          (_product) => _product.brand.toLowerCase() === filters.brand
        )
      );
    },
    [products]
  );

  return (
    <>
      <Filters onFiltersUpdate={onFiltersUpdate} />
      <ProductsShop products={filteredProducts} />
    </>
  );
};

export default Shop;
