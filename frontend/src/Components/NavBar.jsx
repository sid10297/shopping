import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { appTitle, contactUs, home, shop } from "../Constants/navBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const NavBar = () => {
  const { cartItems } = useContext(CartContext);

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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
