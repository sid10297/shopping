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
    removeItem(product);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <Card
          sx={{
            width: "auto",
          }}
        >
          <CardMedia
            style={{ objectFit: "cover" }}
            component="img"
            height="200px"
            image={product.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {product.product}
            </Typography>
            <Typography variant="h6">{product.price} Rs</Typography>
          </CardContent>
          <CardActions>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
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
                <Card sx={{ width: "50px", textAlign: "center" }}>
                  <Typography variant="h6">{quantity}</Typography>
                </Card>
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
                  <RemoveShoppingCart />
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
