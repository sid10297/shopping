import { Card, Typography } from "@mui/material";

const OrdersForUser = ({ orders }) => {
  console.log(orders);
  return (
    <>
      {orders.length > 0 &&
        orders.map((order) => (
          <Card key={order._id} sx={{ margin: "1rem", padding: "1rem" }}>
            <Typography gutterBottom variant="body1">
              OrderID: {order._id}
            </Typography>
            <Typography gutterBottom variant="body1">
              Name: {order.userDetails.name}
            </Typography>
            <Typography gutterBottom variant="body1">
              UserID: {order.userDetails._id}
            </Typography>
            {/* <Typography gutterBottom variant="body1"> */}
            {order.cartItems.map((product) => (
              <>
                <Card
                  sx={{ margin: "1rem", padding: "1rem" }}
                  key={product.product._id}
                >
                  <img
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "10px",
                    }}
                    src={product.product.image}
                    alt="productImage"
                  />
                  <p>Product: {product.product.title}</p>
                  <p>ID: {product.product._id}</p>
                </Card>
              </>
            ))}
            {/* </Typography> */}
            <Typography
              align="right"
              marginRight="20px"
              gutterBottom
              variant="body1"
            >
              Total Amount : {order.cartTotal} Rs
            </Typography>
          </Card>
        ))}
      {orders.length < 1 && (
        <Card sx={{ padding: "1rem", marginTop: "10rem" }}>
          <Typography gutterBottom variant="body1">
            Please buy something to view orders
          </Typography>
        </Card>
      )}
    </>
  );
};

export default OrdersForUser;
