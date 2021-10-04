import styles from "../Styles/brands.module.css";
import NewBalanceLogo from "../Assets/Images/new-balance-logo.png";
import brandsBackground from "../Assets/Images/brandsBackground.jpg";
import { Grid } from "@mui/material";

const arr = [1, 2, 3, 4, 5, 6];

const Brands = () => {
  return (
    <Grid container style={{ backgroundImage: `url(${brandsBackground})` }}>
      {arr.map((i) => (
        <Grid item xs={12} md={6} lg={4}>
          <img src={NewBalanceLogo} alt="logo" className={styles.image} />
        </Grid>
      ))}
      {/* <Grid item xs={12}>
        <img src={NewBalanceLogo} alt="logo" className={styles.image} />
      </Grid>
      <Grid item>
        <img src={NewBalanceLogo} alt="logo" className={styles.image} />
      </Grid>
      <Grid item>
        <img src={NewBalanceLogo} alt="logo" className={styles.image} />
      </Grid>
      <Grid item>
        <img src={NewBalanceLogo} alt="logo" className={styles.image} />
      </Grid>
      <Grid item>
        <img src={NewBalanceLogo} alt="logo" className={styles.image} />
      </Grid>
      <Grid item>
        <img src={NewBalanceLogo} alt="logo" className={styles.image} />
      </Grid> */}
    </Grid>

    // {/* <div className={styles.brandsContainer}>
    //   <div className={styles.background}>
    //     <img src={brandsBackground} alt="" className={styles.backgroundImage} />
    //   </div>
    //   <div className={styles.brands}>
    //     <img src={NewBalanceLogo} alt="logo" className={styles.image} />
    //     <img src={NewBalanceLogo} alt="logo" className={styles.image} />
    //     <img src={NewBalanceLogo} alt="logo" className={styles.image} />
    //     <img src={NewBalanceLogo} alt="logo" className={styles.image} />
    //     <img src={NewBalanceLogo} alt="logo" className={styles.image} />
    //     <img src={NewBalanceLogo} alt="logo" className={styles.image} />
    //   </div>
    // </div> */}
  );
};

export default Brands;
