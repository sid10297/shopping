import { Container, Grid } from "@mui/material";
import { useContext } from "react";
import CreateProduct from "../Components/CreateProduct";
import ProductsData from "../Components/ProductsData";
import { ProductsContext } from "../Contexts/ProductsContext";

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Container maxWidth="lg">
      <Grid container margin={3} marginTop={10}>
        <Grid item lg={8}>
          <ProductsData products={products} />
        </Grid>
        <Grid item lg={4}>
          <CreateProduct />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
