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
        console.log("HEY");
        _filteredProducts = _filteredProducts.filter((_product) => {
          return (
            _product.brand.toLowerCase() === filters.brand &&
            _product.color.toLowerCase() === filters.color
          );
        });
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
        <Grid item>
          <Card
            sx={{
              height: "100vh",
              width: "19vw",
              textAlign: "left",
            }}
          >
            <Filters onFiltersUpdate={onFiltersUpdate} />{" "}
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ minHeight: "100vh", width: "80vw" }}>
            <ProductsShop products={filteredProducts} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
