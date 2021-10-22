import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const _products = await response.json();
      return setProducts(_products);
    } catch (error) {
      console.log(error);
    }
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
