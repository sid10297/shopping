import { Route, Switch } from "react-router";
import NotFound from "../Components/NotFound";
import Orders from "../Components/Orders";
import AdminDashboard from "../Screens/AdminDashboard";
import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";
import Cart from "../Screens/Cart";
import Home from "../Screens/Home";
import Products from "../Screens/Products";
import Shop from "../Screens/Shop";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/products" component={Products} />
      <Route path="/orders" component={Orders} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={Home} exact />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
