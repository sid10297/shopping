import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Cart from "../Screens/Cart";
import ContactUs from "../Screens/ContactUs";
import Home from "../Screens/Home";
import Shop from "../Screens/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactUs} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
