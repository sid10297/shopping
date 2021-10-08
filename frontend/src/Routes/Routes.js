import { Route, Switch } from "react-router";
import Cart from "../Screens/Cart";
// import ContactUs from "../Screens/ContactUs";
import Home from "../Screens/Home";
import Shop from "../Screens/Shop";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      {/* <Route path="/contact" component={ContactUs} /> */}
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
