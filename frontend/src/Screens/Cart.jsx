import { ShoppingBag } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import CartProduct from "../Components/CartProduct";
import { CartContext } from "../Contexts/CartContext";

const Cart = () => {
  const { cartItems, cartTotal, getCartTotal } = useContext(CartContext);

  useEffect(() => {
    calculateTotal(cartItems);
  });

  const calculateTotal = (cartItems) => {
    const quantity = cartItems.map((_product) => _product.quantity);
    const price = cartItems.map((_product) => _product.product.price);
    let total = 0;

    for (let i = 0; i <= cartItems.length - 1; i++) {
      total += quantity[i] * price[i];
      getCartTotal(total);
    }
  };
  return (
    <>
      <Grid container marginTop={8} spacing={2} padding={3}>
        {cartItems.length > 0 && (
          <>
            {cartItems.map((_product) => (
              <CartProduct
                product={_product.product}
                key={_product.product.id}
                quantity={_product.quantity}
              />
            ))}
            <Grid marginTop={3} padding={3} item xs={12}>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography>Price of {cartItems.length} items</Typography>
                  <Typography gutterBottom variant="body1">
                    Total {cartTotal} Rs
                  </Typography>
                  <CardActions>
                    <Button variant="contained">
                      <ShoppingBag /> &nbsp; Place Order
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </>
        )}
      </Grid>

      {cartItems.length < 1 && (
        <Grid
          container
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Card>
              <CardContent>
                <Typography variant="h1">Your Cart us Empty</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Cart;
