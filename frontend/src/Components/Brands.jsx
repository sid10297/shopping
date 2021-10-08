import styles from "../Styles/brands.module.css";
import NewBalanceLogo from "../Assets/Images/new-balance-logo.png";
import brandsBackground from "../Assets/Images/brandsBackground.jpg";
import { Grid } from "@mui/material";

const arr = [1, 2, 3, 4, 5, 6];

const Brands = () => {
  return (
    <Grid
      container
      alignContent="center"
      style={{ backgroundImage: `url(${brandsBackground})`, height: "100vh" }}
    >
      {arr.map((i) => (
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          key={i}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={NewBalanceLogo} alt="logo" className={styles.image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Brands;
