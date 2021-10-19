import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "100vh",
    width: "100vw",
    marginTop: "100px",
    textAlign: "center",
  },
  formStyles: {
    margin: "0 auto",
    padding: "30px",
    borderRadius: "10px",
  },
  spacing: {
    marginTop: "10px",
  },
});

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form noValidate autoComplete="off" className={classes.formStyles}>
        <TextField
          id="entered-name"
          label="Name"
          variant="outlined"
          fullWidth
          className={classes.spacing}
        />

        <TextField
          id="entered-email"
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.spacing}
        />

        <TextField
          id="entered-email"
          label="Password"
          variant="outlined"
          fullWidth
          className={classes.spacing}
        />

        <Button
          variant="contained"
          size="large"
          type="submit"
          className={classes.spacing}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
