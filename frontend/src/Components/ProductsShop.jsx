import { Container, Grid } from "@mui/material";

import Product from "./Product";

const ProductsShop = ({ products }) => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} justifyContent="left">
        {products &&
          products.map((_product) => (
            <Product product={_product} key={_product.id} />
          ))}
      </Grid>
    </Container>
  );
};

export default ProductsShop;
