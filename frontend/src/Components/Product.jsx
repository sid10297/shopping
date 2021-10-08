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

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

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
            minWidth: "150px",
            justifyContent: "space-between",
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
                  {product.product}
                </Typography>
                {/* <Typography variant="body1">{product.color}</Typography> */}
                <Typography variant="caption">Brilliant Shoe</Typography>
                <Typography variant="body2">{product.price} Rs</Typography>
                <Typography variant="body2" gutterBottom>
                  Quantity Available : {product.quantityAvailable}
                </Typography>
              </Grid>
              <Grid item marginTop={1} marginLeft={10}>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={addToCartHandler}
                    disabled={product.quantityAvailable === 0}
                  >
                    {product.quantityAvailable === 0
                      ? "Out of stock"
                      : "Add to cart"}
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default Product;
