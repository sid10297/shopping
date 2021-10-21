import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";
import UserData from "../Components/User";
import { UserAuthContext } from "../Contexts/UserAuthContext";

const useStyles = makeStyles({
  adminContainer: {
    marginTop: "80px",
  },
});

const AdminDashboard = () => {
  const { accessToken } = useContext(UserAuthContext);
  const [users, setUsers] = useState([]);
  // console.log(decoded.role === "ADMIN");

  useEffect(() => {
    const headers = {
      "auth-token": accessToken,
    };
    axios
      .get("http://localhost:5000/api/users", { headers })
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, [accessToken]);

  const classes = useStyles();
  return (
    <div className={classes.adminContainer}>
      <Container>
        <UserData users={users} />
      </Container>
    </div>
  );
};

export default AdminDashboard;
