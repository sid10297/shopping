import { Route, Switch } from "react-router";
import NotFound from "../Components/NotFound";
import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";
import Cart from "../Screens/Cart";
// import ContactUs from "../Screens/ContactUs";
import Home from "../Screens/Home";
import Shop from "../Screens/Shop";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={Home} exact />
      {/* <Route path="/contact" component={ContactUs} /> */}
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
