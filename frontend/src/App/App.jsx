import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";
import ProductsContext from "../Contexts/ProductsContext";
import Routes from "../Routes";

const App = () => {
  const [productList, setProductList] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("http://localhost:8000/products");
    const products = await response.json();
    return setProductList(products);
  };

  const addToCart = (product) => {
    console.log(product);
    const productInCart = addedProducts.find(
      (_product) => _product.product.id === product.id
    );
    if (productInCart) {
      productInCart.quantity += 1;
      setAddedProducts([...addedProducts]);
    } else {
      setAddedProducts([...addedProducts, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {};

  const productsValue = {
    productList,
    addedProducts,
    total,
    addToCart,
    removeFromCart,
  };
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <ProductsContext.Provider value={productsValue}>
          <NavBar />
          <Routes />
        </ProductsContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
