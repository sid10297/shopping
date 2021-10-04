import advertismentImage from "../Assets/Images/PosterShoe.jpg";
import newBalanceLogo from "../Assets/Images/new-balance-logo.png";
import { adTagLine, adTagLine1, adTagLine2 } from "../Constants/advertisment";
import styles from "../Styles/advertisment.module.css";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

const useStyles = makeStyles({
  btn: {
    fontSize: 30,
    backgroundColor: "primary",
    "&:hover": {
      // backgroundColor: "light",
    },
  },
});

const Advertisment = () => {
  const classes = useStyles();
  return (
    // <Container>
    <>
      {/* <Grid
        alignContent="center"
        container
        style={{
          backgroundImage: `url(${advertismentImage})`,
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <Grid item sm={12} md={8} lg={6}>
          <Typography variant="h3" color="white" gutterBottom>
            {adTagLine}
          </Typography>
          <Typography variant="h3" color="white" gutterBottom>
            {adTagLine1}
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            className={styles.descriptionLeftTagLine}
          >
            {adTagLine2}
          </Typography>
          <img
            src={newBalanceLogo}
            alt="AdProductBrand"
            style={{ height: "200px" }}
          />
        </Grid>
        <Grid item sm={12} md={8} lg={6}>
          <Typography variant="h3" color="white" gutterBottom>
            90's Running
          </Typography>
          <Typography variant="p" color="white" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum
            consectetur perspiciatis optio sapiente obcaecati nulla incidunt
            magnam deleniti inventore molestias, officiis blanditiis. Unde
            tempora deleniti, cupiditate corrupti fugiat voluptate.
          </Typography>
          <br />
          <Button variant="contained" color="primary">
            More Info
          </Button>
        </Grid> */}
      <div className={styles.advertismentContainer}>
        <div className={styles.imageContainer}>
          <img
            src={advertismentImage}
            alt="PosterAd"
            className={styles.advertisment}
          />
        </div>
        <div className={styles.advertismentDescription}>
          <div className={styles.descriptionLeft}>
            <Typography variant="h3" align="left" color="white" gutterBottom>
              {adTagLine}
            </Typography>
            <Typography variant="h3" align="left" color="white" gutterBottom>
              {adTagLine1}
            </Typography>
            <Typography
              variant="h3"
              align="left"
              gutterBottom
              className={styles.descriptionLeftTagLine}
            >
              {adTagLine2}
            </Typography>
            <img
              src={newBalanceLogo}
              alt="AdProductBrand"
              className={styles.brandImage}
            />
          </div>
        </div>
        <div className={styles.descriptionRight}>
          <div className={styles.descriptionRightHeader}>
            <Typography variant="h3" align="left" color="white" gutterBottom>
              90's Running
            </Typography>
          </div>
          <div className={styles.descriptionRightDesc}>
            <Typography variant="p" align="left" color="white" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              rerum consectetur perspiciatis optio sapiente obcaecati nulla
              incidunt magnam deleniti inventore molestias, officiis blanditiis.
              Unde tempora deleniti, cupiditate corrupti fugiat voluptate.
            </Typography>
          </div>
          <div className={styles.descriptionRightButton}>
            <Button variant="contained" color="primary" className={classes.btn}>
              More Info
            </Button>
          </div>
        </div>
      </div>
      {/* </Grid> */}
    </>
    // </Container>
  );
};

export default Advertisment;
