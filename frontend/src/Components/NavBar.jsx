import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { appTitle, home, shop } from "../Constants/navBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Logout } from "@mui/icons-material";
import { useCookies } from "react-cookie";
import { UserAuthContext } from "../Contexts/UserAuthContext";

const NavBar = () => {
  const { cartItems } = useContext(CartContext);
  const { accessToken } = useContext(UserAuthContext);

  const removeCookies = useCookies(["access_token"])[2];

  const history = useHistory();

  const handleSignOut = () => {
    removeCookies("access_token", { path: "/" });
    history.push("/login");
  };
  const handleSignUp = () => {
    history.push("/signup");
  };

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {appTitle}
            </Typography>
            <NavLink to="/" exact>
              <Button color="inherit">{home}</Button>
            </NavLink>
            {/* <NavLink to="/contact">
            <Button color="inherit">{contactUs}</Button>
          </NavLink> */}
            <NavLink to="/shop">
              <Button color="inherit">{shop}</Button>
            </NavLink>
            <NavLink to="/cart">
              <Button color="inherit">
                {<ShoppingCartIcon />}
                {cartItems.length > 0 && <span>{cartItems.length}</span>}
              </Button>
            </NavLink>
            {!accessToken && (
              <>
                &nbsp;
                <Button
                  color="secondary"
                  onClick={handleSignUp}
                  variant="contained"
                >
                  &nbsp; Sign Up
                </Button>
                &nbsp;
                <Button
                  color="secondary"
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
    </>
  );
};

export default NavBar;
