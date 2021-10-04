import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductsShop = () => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="150"
          image="../Assets/Images/adidas.jpeg"
          //   image={require("../Assets/Images/imageUrl")}
        />
        <Typography variant="body1" gutterBottom>
          Shoe
        </Typography>
        <Typography variant="caption" gutterBottom>
          Brilliant Shoe
        </Typography>
        <Typography variant="body2" gutterBottom>
          3000 Rs
        </Typography>
        <Button variant="contained">Add to cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductsShop;
