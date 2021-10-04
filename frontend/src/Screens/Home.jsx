import { Grid } from "@mui/material";
import { useContext } from "react";

import Advertisment from "../Components/Advertisment";
import Brands from "../Components/Brands";
import Specials from "../Components/Specials";
import ProductsContext from "../Contexts/ProductsContext";

const Home = () => {
  const { productList } = useContext(ProductsContext);

  return (
    <>
      {/* <Container> */}
      <Advertisment />
      <Brands />
      <Grid container spacing={3} justifyContent="center">
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            margin: "0 5%",
          }}
        > */}
        {productList.slice(0, 3).map((product) => (
          <Specials product={product} key={product.id} />
        ))}
        {/* </div> */}
      </Grid>
      {/* </Container> */}
    </>
  );
};

export default Home;
