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
import { useNavigate } from "react-router-dom";

const Specials = ({ product }) => {
  const history = useNavigate();
  const handleClick = () => {};
  return (
    <>
      <Grid item xs={12} sm={8} md={6} lg={3} margin={2}>
        <Paper variant="outlined">
          <Card
            style={{
              height: "100%",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <CardMedia component="img" height="300" image={product.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.product}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price} Rs
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => history("/shop", { replace: true })}
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default Specials;
