import { Card, Grid } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import Filters from "../Components/Filters";

import ProductsShop from "../Components/ProductsShop";
import { HIGH_TO_LOW, LOW_TO_HIGH, NONE } from "../Constants";
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

      if (filters.sortBy === LOW_TO_HIGH) {
        _filteredProducts = _filteredProducts.sort((a, b) => a.price - b.price);
      }

      if (filters.sortBy === HIGH_TO_LOW) {
        _filteredProducts = _filteredProducts.sort((a, b) => b.price - a.price);
      }

      if (filters.brand === NONE) {
        setFilteredProducts(_filteredProducts);
        return;
      }

      setFilteredProducts(
        _filteredProducts.filter(
          (_product) => _product.title.trim("").toLowerCase() === filters.brand
        )
      );
    },
    [products]
  );

  return (
    <>
      <Grid container marginTop={10}>
        <Grid item xs={12} sm={4} md={12} lg={2} xl={2}>
          <Card
            sx={{
              textAlign: "left",
            }}
          >
            <Filters onFiltersUpdate={onFiltersUpdate} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={12} lg={10} xl={10}>
          <Card sx={{ minHeight: "80vh" }}>
            <ProductsShop products={filteredProducts} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
