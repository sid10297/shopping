import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import axios from "axios";

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

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        email,
        password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.container}>
      <form noValidate autoComplete="off" className={classes.formStyles}>
        <TextField
          id="entered-email"
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          onChange={handleEmail}
          type="email"
        />

        <TextField
          id="entered-password"
          label="Password"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          onChange={handlePassword}
          type="password"
        />

        <Button
          variant="contained"
          size="large"
          type="submit"
          className={classes.spacing}
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
