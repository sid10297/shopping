import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import ProductsContext from "../Contexts/ProductsContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(ProductsContext);

  const addToCartHandler = () => {
    addToCart(product);
  };

  return (
    <Grid item margin={3}>
      <Paper variant="outlined" square>
        <Card
          sx={{
            width: 300,
            height: "100%",
            minWidth: "400px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <CardMedia
              component="img"
              height="300"
              style={{ backgroundColor: "grey", objectFit: "cover" }}
              image={product.image}
            />

            <Typography variant="body1" gutterBottom margin={2}>
              {product.product}
            </Typography>
            <Typography variant="caption" gutterBottom>
              Brilliant Shoe
            </Typography>
            <Typography variant="body2" gutterBottom>
              {product.price} Rs
            </Typography>
            <Typography variant="body2" gutterBottom>
              Quantity Available : {product.quantityAvailable}
            </Typography>
            <Button
              variant="contained"
              onClick={addToCartHandler}
              disabled={product.quantityAvailable === 0}
            >
              {product.quantityAvailable === 0 ? "Out of stock" : "Add to cart"}
            </Button>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default Product;
