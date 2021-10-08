import {
  Add,
  Delete,
  DeleteRounded,
  Remove,
  RemoveCircleRounded,
  RemoveFromQueue,
  RemoveShoppingCart,
} from "@mui/icons-material";
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
import { CartContext } from "../Contexts/CartContext";

const CartProduct = ({ product, quantity }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const incrementQuantity = () => {
    increaseQuantity(product);
  };
  const decrementQuantity = () => {
    decreaseQuantity(product);
  };

  return (
    <>
      <Grid item xs={12} sm={12} lg={6} margin={2}>
        {/* <Paper variant="outlined"> */}
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
            <Button variant="contained" color="error">
              <RemoveShoppingCart />
            </Button>
          </CardActions>
        </Card>
        {/* </Paper> */}
      </Grid>
    </>
  );
};

export default CartProduct;
