import { Grid } from "@mui/material";
import { useContext } from "react";

import Advertisment from "../Components/Advertisment";
import Brands from "../Components/Brands";
import Specials from "../Components/Specials";
import { ProductsContext } from "../Contexts/ProductsContext";

const Home = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <Advertisment />
      <Brands />
      <Grid container justifyContent="center" height="auto" spacing={3}>
        {products &&
          products
            .slice(0, 3)
            .map((product) => <Specials product={product} key={product.id} />)}
      </Grid>
    </>
  );
};

export default Home;
