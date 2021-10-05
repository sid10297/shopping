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
import { useContext } from "react";
import CartProduct from "../Components/CartProduct";
import ProductsContext from "../Contexts/ProductsContext";

const Cart = () => {
  const { addedProducts } = useContext(ProductsContext);
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
    </Grid>
  );
};

export default Cart;
