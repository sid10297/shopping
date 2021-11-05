import { Route, Routes } from "react-router-dom";
import LoginFirst from "../Components/LoginFirst";
import NotFound from "../Components/NotFound";
import Orders from "../Components/Orders";
import AdminDashboard from "../Screens/AdminDashboard";
import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";
import Cart from "../Screens/Cart";
import Home from "../Screens/Home";
import Products from "../Screens/Products";
import Shop from "../Screens/Shop";
import UserOrderInfo from "../Screens/UserOrderInfo";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders-basic" element={<LoginFirst />} />
      <Route path="/orders-basic/:id" element={<UserOrderInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
