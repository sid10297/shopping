import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import CartProduct from "../Components/CartProduct";
import ProductsContext from "../Contexts/ProductsContext";

const Cart = () => {
  const { addedProducts } = useContext(ProductsContext);
  return (
    <Grid container justifyContent="center">
      {addedProducts.map((_product) => (
        <CartProduct
          product={_product.product}
          key={_product.product.id}
          quantity={_product.quantity}
        />
      ))}
    </Grid>
  );
};

export default Cart;
