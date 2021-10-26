import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { UserAuthContext } from "../Contexts/UserAuthContext";
import OrdersForUser from "../Components/OrdersForUser";

const UserOrderInfo = () => {
  const [orders, setOrders] = useState([]);
  const { accessToken } = useContext(UserAuthContext);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (!accessToken) {
      history.push("/login");
      return;
    }

    const headers = {
      "auth-token": accessToken,
    };
    axios
      .get(`http://localhost:5000/api/orders/${id}`, { headers })
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, [id, accessToken, history]);

  return (
    <Container maxWidth="md">
      <Grid container marginTop={10}>
        <Grid item lg={12}>
          <OrdersForUser orders={orders} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserOrderInfo;
