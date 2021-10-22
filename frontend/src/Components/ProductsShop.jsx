import { Grid } from "@mui/material";

import Product from "./Product";

const ProductsShop = ({ products }) => {
  return (
    <Grid container spacing={2} margin={1} justifyContent="left">
      {products &&
        products.map((_product) => (
          <Product product={_product} key={_product._id} />
        ))}
    </Grid>
  );
};

export default ProductsShop;
