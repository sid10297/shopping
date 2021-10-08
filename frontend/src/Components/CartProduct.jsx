import { Add, Remove, RemoveShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const CartProduct = ({ product, quantity }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);
  const incrementQuantity = () => {
    increaseQuantity(product);
  };
  const decrementQuantity = () => {
    decreaseQuantity(product);
  };
  const removeItemFromCart = () => {
    removeItem(product.id);
  };

  return (
    <>
      <Grid item xs={12} sm={12} lg={6} margin={2}>
        <Card
          sx={{
            width: 300,
            height: "100%",
            minWidth: "150px",
            justifyContent: "space-between",
            textAlign: "left",
          }}
        >
          <CardMedia
            style={{ backgroundColor: "grey" }}
            component="img"
            height="200"
            image={product.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.product}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price} Rs
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quantity : {quantity}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Button
              color="primary"
              variant="contained"
              onClick={incrementQuantity}
              disabled={product.quantityAvailable === 0}
            >
              <Add />
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={decrementQuantity}
            >
              <Remove />
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={removeItemFromCart}
            >
              <RemoveShoppingCart />
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default CartProduct;
