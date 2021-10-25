import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../Contexts/UserAuthContext";
import OrderedItemUserDetails from "./OrderedItemUserDetails";

const Orders = () => {
  const { accessToken } = useContext(UserAuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const headers = {
      "auth-token": accessToken,
    };
    axios
      .get("http://localhost:5000/api/orders", { headers })
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, [accessToken]);

  return (
    <Container maxWidth="md">
      <Grid container marginTop={10}>
        <Grid item lg={12}>
          <OrderedItemUserDetails orders={orders} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Orders;
