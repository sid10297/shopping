import { ShoppingBag } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Paper,
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
      <Container maxWidth="lg">
        <Card sx={{ margin: "10px" }}>
          <Grid container justifyContent="left" position="relative">
            {cartItems.length > 0 ? (
              cartItems.map((_product) => (
                <CartProduct
                  product={_product.product}
                  key={_product.product.id}
                  quantity={_product.quantity}
                />
              ))
            ) : (
              <Grid container justifyContent="center">
                <Grid item xs={12} sm={6} md={3} margin={3}>
                  <Paper variant="outlined">
                    <Card
                      sx={{
                        height: "100%",
                        minWidth: "400px",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body1"
                          color="primary"
                        >
                          Cart is empty
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
              </Grid>
            )}
            {cartItems.length > 0 && (
              <Grid container justifyContent="right">
                <Grid item position="absolute" top={20} marginRight={2}>
                  <Card
                    style={{
                      height: "100%",
                      textAlign: "left",
                      justifyContent: "center",
                      minWidth: "400px",
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
              </Grid>
            )}
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default Cart;
