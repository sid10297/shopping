import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useState } from "react";
import { UserAuthContext } from "../Contexts/UserAuthContext";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",

    textAlign: "center",
  },
  formStyles: {
    margin: "0 auto",
    padding: "30px",
    borderRadius: "10px",
  },
  spacing: {
    marginTop: "10px",
  },
});

const CreateProduct = () => {
  const classes = useStyles();
  const { accessToken } = useContext(UserAuthContext);

  const [product, setProduct] = useState({
    title: String,
    description: String,
    price: Number,
    quantityAvailable: Number,
    image: String,
  });

  const createUser = () => {
    const headers = {
      "auth-token": accessToken,
    };
    axios
      .post("http://localhost:5000/api/products", product, { headers })
      .then((response) => window.location.reload(false))
      .catch((error) => console.log(error));
  };
  const handleTitle = (e) =>
    setProduct({
      ...product,
      title: e.target.value,
    });
  const handleDescription = (e) =>
    setProduct({ ...product, description: e.target.value });
  const handlePrice = (e) => setProduct({ ...product, price: e.target.value });
  const handleQuantityAvailable = (e) =>
    setProduct({ ...product, quantityAvailable: e.target.value });
  const handleImage = (e) => setProduct({ ...product, image: e.target.value });

  return (
    <div className={classes.container}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={classes.formStyles}
      >
        <TextField
          variant="outlined"
          fullWidth
          required
          label="Title"
          onChange={handleTitle}
          className={classes.spacing}
        />
        <TextField
          variant="outlined"
          required
          label="Description"
          onChange={handleDescription}
          fullWidth
          className={classes.spacing}
        />
        <TextField
          variant="outlined"
          required
          label="Price"
          onChange={handlePrice}
          fullWidth
          className={classes.spacing}
        />
        <TextField
          variant="outlined"
          required
          label="Quantity Available"
          onChange={handleQuantityAvailable}
          fullWidth
          className={classes.spacing}
        />
        <TextField
          variant="outlined"
          multiline
          required
          label="Image"
          onChange={handleImage}
          fullWidth
          className={classes.spacing}
        />
        <Button
          variant="contained"
          fullWidth
          className={classes.spacing}
          onClick={createUser}
        >
          ADD PRODUCT
        </Button>
      </Box>
    </div>
  );
};

export default CreateProduct;
