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

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addToCart(product);
  };

  return (
    <Grid item xs={12} sm={10} md={5} lg={4} xl={3}>
      <Card
        sx={{
          width: 300,
          height: "100%",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            height="200"
            style={{ objectFit: "cover" }}
            image={product.image}
          />
          <Grid container>
            <Grid item marginTop={1}>
              <Typography variant="body1" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {product.description}
              </Typography>
              <Typography variant="body1">{product.price} Rs</Typography>
              <Typography variant="body2" gutterBottom>
                Quantity Available : {product.quantity}
              </Typography>
            </Grid>
            <Grid item marginTop={1} marginLeft={10}>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={addToCartHandler}
                  disabled={product.quantity === 0}
                >
                  {product.quantity === 0 ? "Out of stock" : "Add to cart"}
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
