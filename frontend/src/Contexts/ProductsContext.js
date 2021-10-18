import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  // const getProducts = async () => {
  //   const response = await fetch("http://localhost:8000/products");
  //   const _products = await response.json();
  //   return setProducts(_products);
  // };

  const getProducts = async () => {
    const response = await fetch("http://localhost:5000/products");
    const _products = await response.json();
    console.log(_products);
    return setProducts(_products);
  };

  const providerValue = {
    products,
  };

  return (
    <ProductsContext.Provider value={providerValue}>
      {children}
    </ProductsContext.Provider>
  );
};
