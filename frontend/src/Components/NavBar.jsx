import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { appTitle, home, shop } from "../Constants/navBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Logout } from "@mui/icons-material";
import { useCookies } from "react-cookie";
import { UserAuthContext } from "../Contexts/UserAuthContext";
import styles from "../Styles/navBar.module.css";
import { ADMIN, BASIC } from "../Constants";
import jwtDecode from "jwt-decode";

const NavBar = () => {
  const { cartItems } = useContext(CartContext);
  const { accessToken, userData, setUserData } = useContext(UserAuthContext);
  const [getId, setGetId] = useState("");

  const removeCookies = useCookies(["access_token"])[2];
  const cookies = useCookies(["access_token"])[0];

  useEffect(() => {
    if (cookies.access_token) {
      try {
        const { _id } = jwtDecode(cookies.access_token);
        setGetId(_id);
      } catch (error) {
        console.log(error);
      }
    }
  }, [cookies.access_token, setUserData, userData]);

  const history = useNavigate();

  const handleSignOut = () => {
    removeCookies("access_token", { path: "/" });
    setUserData(null);
    history("/login");
  };
  const handleSignUp = () => {
    history("/signup");
  };

  const handleLogin = () => {
    history("/login");
  };

  return (
    <>
      {(userData === null || userData.role === ADMIN) && (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/admin">ADMIN PANEL</NavLink>
              </Typography>
              <NavLink
                to="/admin"
                className={(navData) => (navData ? styles.isActive : "")}
              >
                <Button color="inherit">Users</Button>
              </NavLink>
              <NavLink
                to="/products"
                className={(navData) => (navData ? styles.isActive : "")}
              >
                <Button color="inherit">Products</Button>
              </NavLink>
              <NavLink
                to="/orders"
                className={(navData) => (navData ? styles.isActive : "")}
              >
                <Button color="inherit">Orders</Button>
              </NavLink>
              {!accessToken && (
                <>
                  &nbsp;
                  <Button
                    color="warning"
                    onClick={handleSignUp}
                    variant="contained"
                  >
                    &nbsp; Sign Up
                  </Button>
                  &nbsp;
                  <Button
                    color="success"
                    variant="contained"
                    onClick={handleLogin}
                  >
                    Log In
                  </Button>
                </>
              )}
              &nbsp;
              {accessToken && (
                <Button
                  color="warning"
                  variant="contained"
                  onClick={handleSignOut}
                >
                  {<Logout />} &nbsp; Sign Out
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      )}

      {/* BASIC */}

      {(userData === null || userData.role === BASIC) && (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/">{appTitle}</NavLink>
              </Typography>
              <NavLink
                to="/"
                className={(navData) => (navData ? styles.isActive : "")}
              >
                <Button color="inherit">{home}</Button>
              </NavLink>
              <NavLink
                to="/shop"
                className={(navData) => (navData ? styles.isActive : "")}
              >
                <Button color="inherit">{shop}</Button>
              </NavLink>
              {!accessToken ? (
                <NavLink
                  to={`/orders-basic`}
                  className={(navData) => (navData ? styles.isActive : "")}
                >
                  <Button color="inherit">Orders</Button>
                </NavLink>
              ) : (
                <NavLink
                  to={`/orders-basic/${getId}`}
                  className={(navData) => (navData ? styles.isActive : "")}
                >
                  <Button color="inherit">Orders</Button>
                </NavLink>
              )}
              <NavLink
                to="/cart"
                className={(navData) => (navData ? styles.isActive : "")}
              >
                <Button color="inherit">
                  {<ShoppingCartIcon />}
                  {cartItems.length > 0 && <span>{cartItems.length}</span>}
                </Button>
              </NavLink>
              &nbsp;
              {!accessToken && (
                <>
                  &nbsp;
                  <Button
                    color="warning"
                    onClick={handleSignUp}
                    variant="contained"
                  >
                    &nbsp; Sign Up
                  </Button>
                  &nbsp;
                  <Button
                    color="success"
                    variant="contained"
                    onClick={handleLogin}
                  >
                    Log In
                  </Button>
                </>
              )}
              &nbsp;
              {accessToken && (
                <Button
                  color="warning"
                  variant="contained"
                  onClick={handleSignOut}
                >
                  {<Logout />} &nbsp; Logout{" "}
                  {userData ? userData.name.split(" ")[0] : null}
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
};

export default NavBar;
