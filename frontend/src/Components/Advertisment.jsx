import advertismentImage from "../Assets/Images/PosterShoe.jpg";
import newBalanceLogo from "../Assets/Images/new-balance-logo.png";
import { adTagLine, adTagLine1, adTagLine2 } from "../Constants/advertisment";
import styles from "../Styles/advertisment.module.css";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    fontSize: 30,
    backgroundColor: "primary",
  },
});

const Advertisment = () => {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
};

export default Advertisment;
