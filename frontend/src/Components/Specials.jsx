import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Specials = ({ product }) => {
  return (
    // <div style={{ width: "100%", margin: "2rem", textAlign: "center" }}>
    //   <h1>{product.product}</h1>
    //   <p>{product.price} Rs</p>
    //   <img
    //     src={product.img}
    //     style={{ height: "150px", backgroundColor: "black" }}
    //     alt=""
    //   />
    //   <br />
    //   <Button variant="contained">Buy Now</Button>
    // </div>
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{ maxWidth: 345 }}
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
            height="200"
            image={product.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.product}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price} Rs
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Button size="small" color="primary" variant="contained">
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Specials;
