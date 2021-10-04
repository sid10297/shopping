import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import ProductsContext from "../Contexts/ProductsContext";
import Cart from "../Screens/Cart";
import ContactUs from "../Screens/ContactUs";
import Home from "../Screens/Home";
import Shop from "../Screens/Shop";

const Routes = () => {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => setSpecials(data));
  }, []);

  const productsValue = {
    specials,
  };

  return (
    <Switch>
      <ProductsContext.Provider value={productsValue}>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactUs} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
      </ProductsContext.Provider>
    </Switch>
  );
};

export default Routes;
