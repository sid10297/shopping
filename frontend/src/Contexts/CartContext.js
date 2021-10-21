import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);

  const handleAgree = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const addToCart = (product) => {
    const productInCart = items.find(
      (_product) => _product.product._id === product._id
    );

    if (productInCart) {
      productInCart.quantity += 1;
      product.quantity -= 1;
      return setItems([...items]);
    } else {
      product.quantity -= 1;
      return setItems([...items, { product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (product) => {
    const productQuantityToIncrease = items.find(
      (_product) => _product.product._id === product._id
    );

    if (productQuantityToIncrease) {
      product.quantity -= 1;
      productQuantityToIncrease.quantity += 1;
      return setItems([...items]);
    }
  };

  const decreaseQuantity = (product) => {
    const productQuantityToDecrease = items.find(
      (_product) => _product.product._id === product._id
    );

    if (productQuantityToDecrease.quantity < 1) {
      const filterOut = items.filter(
        (_product) => _product.product._id !== product._id
      );

      return setItems(filterOut);
    }

    if (productQuantityToDecrease) {
      product.quantity += 1;
      productQuantityToDecrease.quantity -= 1;
      return setItems([...items]);
    }
  };

  const removeItem = (product) => {
    const removeItemFromCart = items.find(
      (_product) => _product.product._id === product._id
    );

    product.quantity = removeItemFromCart.quantity + product.quantity;

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
    handleAgree,
    handleCancel,
    open,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};
