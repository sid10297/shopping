import { Container, Grid } from "@mui/material";
import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";
import Product from "./Product";

const ProductsShop = () => {
  const products = useContext(ProductsContext);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} justifyContent="center">
        {products &&
          products.map((_product) => (
            <Product product={_product} key={_product.id} />
          ))}
      </Grid>
    </Container>
  );
};

export default ProductsShop;
