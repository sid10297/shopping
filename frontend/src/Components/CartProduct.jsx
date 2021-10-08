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

const CartProduct = ({ product, quantity, cartItems }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);

  const incrementQuantity = () => {
    increaseQuantity(product);
  };
  const decrementQuantity = () => {
    decreaseQuantity(product);
  };
  const removeItemFromCart = () => {
    removeItem(product);
  };

  return (
    <>
      <Grid item xs={12} sm={12} lg={6} margin={2}>
        <Card
          sx={{
            width: 650,
            height: "100%",
            minWidth: "150px",
            justifyContent: "space-between",
            textAlign: "left",
          }}
        >
          <CardMedia
            style={{ objectFit: "cover" }}
            component="img"
            height="300px"
            image={product.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.product}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price} Rs
            </Typography>
          </CardContent>
          <CardActions>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  color="success"
                  variant="contained"
                  onClick={incrementQuantity}
                  disabled={product.quantityAvailable === 0}
                >
                  <Add />
                </Button>
                &nbsp;&nbsp;
                <Card sx={{ width: "50px", textAlign: "center" }}>
                  <Typography variant="h6">{quantity}</Typography>
                </Card>
                &nbsp;&nbsp;
                <Button
                  color="error"
                  variant="contained"
                  onClick={decrementQuantity}
                >
                  <Remove />
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={removeItemFromCart}
                >
                  Remove From Cart &nbsp; <RemoveShoppingCart />
                </Button>
              </div>
            </div>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default CartProduct;
