import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { appTitle, home, shop } from "../Constants/navBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Logout } from "@mui/icons-material";

const NavBar = () => {
  const { cartItems } = useContext(CartContext);
  const history = useHistory();

  const handleSignOut = () => {
    history.push("/login");
  };
  const handleSignUp = () => {
    history.push("/signup");
  };

  const handleLogin = () => {
    history.push("/login");
  };

  return (
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

          <Button color="inherit" onClick={handleSignOut}>
            {<Logout />} &nbsp; Sign Out
          </Button>

          <Button color="inherit" onClick={handleSignUp}>
            &nbsp; Sign Up
          </Button>

          <Button color="inherit" onClick={handleLogin}>
            Log In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
