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
import { useContext, useEffect, useState } from "react";
import CartProduct from "../Components/CartProduct";
import { CartContext } from "../Contexts/CartContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserAuthContext } from "../Contexts/UserAuthContext";
import jwtDecode from "jwt-decode";

const Cart = () => {
  const { cartItems, cartTotal, getCartTotal, setCartItems } =
    useContext(CartContext);
  const { accessToken } = useContext(UserAuthContext);
  const history = useHistory();
  const [purchasePopup, setPurchasePopup] = useState(false);

  useEffect(() => {
    const calculateTotal = (cartItems) => {
      const quantity = cartItems.map((_product) => _product.quantityToOrder);
      const price = cartItems.map((_product) => _product.product.price);
      let total = 0;
      for (let i = 0; i <= cartItems.length - 1; i++) {
        total += quantity[i] * price[i];
        getCartTotal(total);
      }
    };
    calculateTotal(cartItems);
  }, [cartItems, getCartTotal]);

  const placeOrder = (e) => {
    e.preventDefault();

    if (!accessToken) {
      history.push("/login");
      return;
    }

    const productDetails = cartItems.map((item) => [
      {
        _id: item.product._id,
        quantityAvailable: item.product.quantityAvailable,
        quantityToOrder: item.quantityToOrder,
      },
    ]);

    console.log(productDetails);

    const userDetails = jwtDecode(accessToken);

    const headers = {
      "auth-token": accessToken,
    };

    axios
      .post(
        "http://localhost:5000/api/place-order",
        {
          cartItems,
          cartTotal,
          userDetails,
        },
        { headers }
      )
      .then((response) => {
        setCartItems([]);
        setPurchasePopup(true);
      })
      .catch((error) => {
        console.log(error);
      });
    setPurchasePopup(true);
  };

  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          position="relative"
          marginTop={8}
          spacing={2}
          padding={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cartItems.length > 0 && (
            <>
              {cartItems.map((_product) => (
                <CartProduct
                  product={_product.product}
                  key={_product.product._id}
                  quantity={_product.quantityToOrder}
                />
              ))}
              <Grid marginTop={3} padding={1} item xs={12}>
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    position: "absolute",
                    top: "20px",
                    right: "10%",
                  }}
                >
                  <CardContent>
                    <Typography>Price of {cartItems.length} items</Typography>
                    <Typography gutterBottom variant="body1">
                      Total {cartTotal} Rs
                    </Typography>
                    <CardActions>
                      <Button
                        variant="contained"
                        type="submit"
                        onClick={placeOrder}
                      >
                        <ShoppingBag /> &nbsp; Place Order
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            </>
          )}
        </Grid>
      </Container>

      {cartItems.length < 1 && (
        <Grid
          container
          height="80vh"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Card>
              <CardContent>
                {purchasePopup ? (
                  <Typography variant="h6">
                    {" "}
                    Order Placed Successfully{" "}
                  </Typography>
                ) : (
                  <Typography variant="h6">Your Cart is Empty</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Cart;
