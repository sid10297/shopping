import { Card, Typography } from "@mui/material";

const OrderedProductDetails = ({ orders }) => {
  return (
    <>
      {orders.map((order) => (
        <>
          <Card key={order._id} sx={{ margin: "1rem", padding: "1rem" }}>
            <Typography gutterBottom variant="body1">
              {order.cartItems.map((product) => (
                <>
                  <p>Product: {product.product.title}</p>
                  <p>ID: {product.product._id}</p>
                  <br />
                </>
              ))}
            </Typography>
            <Typography gutterBottom variant="body1">
              Total Amount : {order.cartTotal} Rs
            </Typography>
          </Card>
        </>
      ))}
    </>
  );
};

export default OrderedProductDetails;
