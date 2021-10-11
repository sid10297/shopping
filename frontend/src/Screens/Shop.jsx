import { Card, Grid } from "@mui/material";
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

      if (filters.color !== "none" && filters.brand !== "none") {
        _filteredProducts = _filteredProducts.filter(
          (_product) =>
            _product.brand.toLowerCase() === filters.brand &&
            _product.color.toLowerCase() === filters.color
        );
      }

      if (filters.customerRatings === "above4Star") {
        _filteredProducts = _filteredProducts.filter((_product) => {
          return _product.rating >= 4;
        });
      }

      if (filters.customerRatings === "above3Star") {
        _filteredProducts = _filteredProducts.filter((_product) => {
          return _product.rating >= 3;
        });
      }

      if (filters.sortBy === "lowToHigh") {
        _filteredProducts = _filteredProducts.sort((a, b) => a.price - b.price);
      }

      if (filters.sortBy === "highToLow") {
        _filteredProducts = _filteredProducts.sort((a, b) => b.price - a.price);
      }

      if (filters.brand === "none" && filters.color === "none") {
        setFilteredProducts(_filteredProducts);
        return;
      }

      setFilteredProducts(
        _filteredProducts.filter(
          (_product) =>
            _product.brand.toLowerCase() === filters.brand ||
            _product.color.toLowerCase() === filters.color
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
          <Card sx={{ minHeight: "100vh" }}>
            <ProductsShop products={filteredProducts} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
