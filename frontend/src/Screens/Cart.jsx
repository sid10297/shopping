import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CartProduct from "../Components/CartProduct";
import ProductsContext from "../Contexts/ProductsContext";

const Cart = () => {
  const [state, setState] = useState(0);
  const { addedProducts } = useContext(ProductsContext);

  useEffect(() => {
    calculateTotal(addedProducts);
  }, [addedProducts]);

  const calculateTotal = (addedProducts) => {
    const quantity = addedProducts.map((_product) => _product.quantity);
    const price = addedProducts.map((_product) => _product.product.price);
    let total = 0;

    for (let i = 0; i <= addedProducts.length - 1; i++) {
      total += quantity[i] * price[i];
      console.log(total);
      setState(total);
    }
  };
  return (
    <Grid container justifyContent="center">
      {addedProducts.length > 0 ? (
        addedProducts.map((_product) => (
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
                  // width: "300",
                  height: "100%",
                  minWidth: "400px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
                style={{
                  height: "100%",
                  minWidth: "400px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="body1" color="primary">
                    Cart is empty
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      )}
      {addedProducts.length > 0 && (
        <div>
          <h1>Total cart value is : {state} Rs</h1>
        </div>
      )}
    </Grid>
  );
};

export default Cart;
