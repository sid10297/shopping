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

const CartProduct = ({ product, quantity }) => {
  return (
    <>
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
            <CardMedia
              style={{ backgroundColor: "grey" }}
              component="img"
              height="300"
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
              <Button size="small" color="primary" variant="contained">
                +
              </Button>
              <Button size="small" color="primary" variant="contained">
                -
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default CartProduct;
