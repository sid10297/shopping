import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import { CartContext } from "../../Contexts/CartContext";
import jwt_decode from "jwt-decode";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    maxHeight: "80vh",
    maxWidth: "100vw",
    marginTop: "100px",
    textAlign: "center",
  },
  formStyles: {
    margin: "0 auto",
    padding: "30px",
    borderRadius: "10px",
  },
  spacing: {
    marginTop: "20px",
  },
});

const Login = () => {
  const classes = useStyles();
  const { cartItems } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setCookie = useCookies(["access_token"])[1];
  const history = useHistory();

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        email,
        password,
      })
      .then((response) => {
        setCookie("access_token", response.data, { path: "/" });
        setEmail("");
        setPassword("");
        const user = jwt_decode(response.data);
        if (user.role === "ADMIN") {
          history.push("/admin");
        } else {
          cartItems.length > 0 ? history.push("/cart") : history.push("/");
        }
      })
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
