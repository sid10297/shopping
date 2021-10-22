import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    // const productInCart = items.find(
    //   (_product) => _product.product._id === product._id
    // );

    // if (productInCart) {
    //   productInCart.quantityToOrder += 1;
    //   product.quantityAvailable -= 1;
    //   return setItems([...items]);
    // } else {
    product.quantityAvailable -= 1;
    return setItems([...items, { product, quantityToOrder: 1 }]);
    // }
  };

  const increaseQuantity = (product) => {
    const productQuantityToIncrease = items.find(
      (_product) => _product.product._id === product._id
    );

    if (productQuantityToIncrease) {
      product.quantityAvailable -= 1;
      productQuantityToIncrease.quantityToOrder += 1;
      return setItems([...items]);
    }
  };

  const decreaseQuantity = (product) => {
    const productQuantityToDecrease = items.find(
      (_product) => _product.product._id === product._id
    );

    if (productQuantityToDecrease.quantityToOrder < 1) {
      const filterOut = items.filter(
        (_product) => _product.product._id !== product._id
      );

      return setItems(filterOut);
    }

    if (productQuantityToDecrease) {
      product.quantityAvailable += 1;
      productQuantityToDecrease.quantityToOrder -= 1;
      return setItems([...items]);
    }
  };

  const removeItem = (product) => {
    const removeItemFromCart = items.find(
      (_product) => _product.product._id === product._id
    );

    product.quantityAvailable =
      removeItemFromCart.quantityToOrder + product.quantityAvailable;

    return setItems(
      items.filter((_product) => _product.product._id !== product._id)
    );
  };

  const getCartTotal = (total) => {
    setTotal(total);
  };

  const cartContextValues = {
    cartItems: items,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal: total,
    getCartTotal,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};
