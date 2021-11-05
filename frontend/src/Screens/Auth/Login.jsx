import { Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
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
  popup: {
    color: "red",
  },
});

const Login = () => {
  const classes = useStyles();
  const { cartItems } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setCookie = useCookies(["access_token"])[1];
  const history = useNavigate();
  const [InvalidCredentials, setInvalidCredentials] = useState(false);

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
          history("/admin", { replace: true });
        } else {
          cartItems.length > 0
            ? history("/cart", { replace: true })
            : history("/", { replace: true });
        }
      })
      .catch((error) => setInvalidCredentials(true));
  };

  return (
    <div className={classes.container}>
      <form noValidate autoComplete="off" className={classes["formStyles"]}>
        {InvalidCredentials && (
          <>
            <Typography className={classes.popup}>
              Email or password is wrong
            </Typography>
          </>
        )}
        <TextField
          error={InvalidCredentials}
          id="entered-email"
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.spacing}
          onChange={handleEmail}
          type="email"
        />

        <TextField
          error={InvalidCredentials}
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
