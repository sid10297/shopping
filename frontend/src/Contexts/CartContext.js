import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const productInCart = items.find(
      (_product) => _product.product.id === product.id
    );

    if (productInCart) {
      productInCart.quantity += 1;
      product.quantityAvailable -= 1;
      return setItems([...items]);
    } else {
      product.quantityAvailable -= 1;
      return setItems([...items, { product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (product) => {
    const productQuantityToIncrease = items.find(
      (_product) => _product.product.id === product.id
    );

    if (productQuantityToIncrease) {
      product.quantityAvailable -= 1;
      productQuantityToIncrease.quantity += 1;
      return setItems([...items]);
    }
  };

  const decreaseQuantity = (product) => {
    const productQuantityToDecrease = items.find(
      (_product) => _product.product.id === product.id
    );

    if (productQuantityToDecrease.quantity < 1) {
      const filterOut = items.filter(
        (_product) => _product.product.id !== product.id
      );

      return setItems(filterOut);
    }

    if (productQuantityToDecrease) {
      product.quantityAvailable += 1;
      productQuantityToDecrease.quantity -= 1;
      return setItems([...items]);
    }
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
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};
