import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { CartProvider } from "../Contexts/CartContext";
import { ProductsProvider } from "../Contexts/ProductsContext";
import { CookiesProvider } from "react-cookie";

import { UserAuthProvider } from "../Contexts/UserAuthContext";
import Footer from "../Components/Footer";
import MyRoutes from "../Routes/Routes";

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
                <MyRoutes />
              </ProductsProvider>
              <Footer />
            </CartProvider>
          </UserAuthProvider>
        </BrowserRouter>
      </CookiesProvider>
    </>
  );
};

export default App;
