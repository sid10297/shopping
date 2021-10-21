import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { CartProvider } from "../Contexts/CartContext";
import { ProductsProvider } from "../Contexts/ProductsContext";
import { CookiesProvider } from "react-cookie";

import Routes from "../Routes/Routes";
import { UserAuthProvider } from "../Contexts/UserAuthContext";

const App = () => {
  return (
    <>
      <CookiesProvider>
        <CssBaseline />
        <BrowserRouter>
          <UserAuthProvider>
            <CartProvider>
              <NavBar />
              <ProductsProvider>
                <Routes />
              </ProductsProvider>
            </CartProvider>
          </UserAuthProvider>
        </BrowserRouter>
      </CookiesProvider>
    </>
  );
};

export default App;
