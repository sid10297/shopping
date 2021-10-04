import { Container, Grid } from "@mui/material";
import { useEffect, useContext } from "react";

import Advertisment from "../Components/Advertisment";
import Brands from "../Components/Brands";
import Specials from "../Components/Specials";
import ProductsContext from "../Contexts/ProductsContext";

const Home = () => {
  const { specials } = useContext(ProductsContext);

  return (
    <>
      {/* <Container> */}
      <Advertisment />
      <Brands />
      <Grid container>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            margin: "0 5%",
          }}
        > */}
        {specials.slice(0, 3).map((product) => (
          <Specials product={product} key={product.id} />
        ))}
        {/* </div> */}
      </Grid>
      {/* </Container> */}
    </>
  );
};

export default Home;
