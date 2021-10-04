import { useContext } from "react";
import ProductsContext from "../Contexts/ProductsContext";

const Cart = () => {
  const { addedProducts } = useContext(ProductsContext);
  return (
    <div>
      <h1>{addedProducts.length}</h1>
    </div>
  );
};

export default Cart;
