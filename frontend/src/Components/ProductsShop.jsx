import { Grid } from "@mui/material";

import Product from "./Product";

const ProductsShop = ({ products }) => {
  return (
    <Grid container spacing={3} margin={2} justifyContent="left">
      {products &&
        products.map((_product) => (
          <Product product={_product} key={_product.id} />
        ))}
    </Grid>
  );
};

export default ProductsShop;
