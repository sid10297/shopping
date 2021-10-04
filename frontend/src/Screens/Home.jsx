import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

import Advertisment from "../Components/Advertisment";
import Brands from "../Components/Brands";
import Specials from "../Components/Specials";

const Home = () => {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => setSpecials(data));
  }, []);

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
        {specials.map((product) => (
          <Specials product={product} key={product.id} />
        ))}
        {/* </div> */}
      </Grid>
      {/* </Container> */}
    </>
  );
};

export default Home;
