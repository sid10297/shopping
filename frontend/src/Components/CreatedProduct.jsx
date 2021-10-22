import { Button, TableCell, TableRow } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { UserAuthContext } from "../Contexts/UserAuthContext";

const CreatedProduct = ({ product }) => {
  const { accessToken } = useContext(UserAuthContext);

  const handleDelete = () => {
    const headers = {
      "auth-token": accessToken,
    };
    axios
      .delete(`http://localhost:5000/api/products/${product._id}`, {
        headers,
      })
      .then((res) => window.location.reload(false))
      .catch((err) => console.log(err));
  };

  return (
    <TableRow
      key={product._id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {product.title}
      </TableCell>
      <TableCell align="right">{product.description}</TableCell>
      <TableCell align="right">{product.price}</TableCell>
      <TableCell align="right">{product._id}</TableCell>
      <TableCell align="right">
        <Button
          color="error"
          variant="contained"
          size="small"
          onClick={handleDelete}
        >
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CreatedProduct;
