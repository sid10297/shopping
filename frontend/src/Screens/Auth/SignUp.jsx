import { Button, TextField } from "@mui/material";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
});

const SignUp = () => {
  const [user, setUser] = useState({
    name: String,
    email: String,
    password: String,
  });

  const history = useHistory();

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
        history.push("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.container}>
      <form noValidate autoComplete="off" className={classes.formStyles}>
        <TextField
          id="entered-name"
          label="Name"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          onChange={handleName}
        />

        <TextField
          id="entered-email"
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          onChange={handleEmail}
        />

        <TextField
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
