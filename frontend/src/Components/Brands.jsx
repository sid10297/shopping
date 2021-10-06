import styles from "../Styles/brands.module.css";
import NewBalanceLogo from "../Assets/Images/new-balance-logo.png";
import brandsBackground from "../Assets/Images/brandsBackground.jpg";
import { Grid } from "@mui/material";

const arr = [1, 2, 3, 4, 5, 6];

const Brands = () => {
  return (
    <Grid
      container
      style={{ backgroundImage: `url(${brandsBackground})` }}
      justifyContent="center"
      spacing={3}
    >
      {arr.map((i) => (
        <Grid item xs={12} md={6} lg={4} key={i}>
          <img src={NewBalanceLogo} alt="logo" className={styles.image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Brands;
