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
      <br />
      <h1 style={{ textAlign: "center" }}>Specials</h1>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="auto"
        spacing={1}
      >
        {products &&
          products
            .slice(0, 3)
            .map((product) => <Specials product={product} key={product._id} />)}
      </Grid>
    </>
  );
};

export default Home;
