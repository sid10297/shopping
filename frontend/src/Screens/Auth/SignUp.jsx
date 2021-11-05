import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    maxHeight: "80vh",
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
  popup: {
    color: "red",
  },
});

const SignUp = () => {
  const [user, setUser] = useState({
    name: String,
    email: String,
    password: String,
  });

  const [InvalidCredentials, setInvalidCredentials] = useState(false);

  const history = useNavigate();

  const classes = useStyles();

  const handleName = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };
  const handleEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const registerUser = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/register", user)
      .then((response) => {
        setUser({
          name: "",
          email: "",
          password: "",
        });
        history("/login", { replace: true });
      })
      .catch((error) => setInvalidCredentials(true));
  };

  return (
    <div className={classes.container}>
      <form noValidate autoComplete="off" className={classes.formStyles}>
        {InvalidCredentials && (
          <>
            <Typography className={classes.popup}>
              Email already exists
            </Typography>
          </>
        )}
        <TextField
          error={InvalidCredentials}
          id="entered-name"
          label="Name"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          onChange={handleName}
        />

        <TextField
          error={InvalidCredentials}
          id="entered-email"
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          onChange={handleEmail}
        />

        <TextField
          error={InvalidCredentials}
          id="entered-email"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          className={classes.spacing}
          onChange={handlePassword}
        />

        <Button
          variant="contained"
          size="large"
          className={classes.spacing}
          onClick={registerUser}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
