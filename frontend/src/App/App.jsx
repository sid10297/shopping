import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";
import ProductsContext from "../Contexts/ProductsContext";
import Routes from "../Routes/Routes";

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
    const productInCart = addedProducts.find(
      (_product) => _product.product.id === product.id
    );

    if (productInCart) {
      productInCart.quantity += 1;
      product.quantityAvailable -= 1;
      return setAddedProducts([...addedProducts]);
    } else {
      product.quantityAvailable -= 1;
      return setAddedProducts([...addedProducts, { product, quantity: 1 }]);
    }
  };

  const changeQuantity = (product, quantity) => {
    const productQuantityToIncrease = addedProducts.find(
      (_product) => _product.product.id === product.id
    );

    if (productQuantityToIncrease) {
      product.quantityAvailable -= 1;
      productQuantityToIncrease.quantity += 1;
      return setAddedProducts([...addedProducts]);
    }
  };

  const removeFromCart = (product, quantity) => {
    const productQuantityToDecrease = addedProducts.find(
      (_product) => _product.product.id === product.id
    );

    if (productQuantityToDecrease.quantity < 1) {
      const filterOut = addedProducts.filter(
        (_product) => _product.product.id !== product.id
      );

      return setAddedProducts(filterOut);
    }

    if (productQuantityToDecrease) {
      product.quantityAvailable += 1;
      productQuantityToDecrease.quantity -= 1;
      return setAddedProducts([...addedProducts]);
    }
  };

  const productsValue = {
    productList,
    addedProducts,
    total,
    addToCart,
    removeFromCart,
    changeQuantity,
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
