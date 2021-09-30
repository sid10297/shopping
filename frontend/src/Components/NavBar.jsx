import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { appTitle, contactUs, home, shop } from "../Constants/navBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {appTitle}
          </Typography>
          <Button color="inherit">{home}</Button>
          <Button color="inherit">{contactUs}</Button>
          <Button color="inherit">{shop}</Button>
          <Button color="inherit">{<ShoppingCartIcon />}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
