import { useContext } from "react";
import ProductsShop from "../Components/ProductsShop";
import ProductsContext from "../Contexts/ProductsContext";

const Shop = () => {
  const { specials } = useContext(ProductsContext);

  return (
    <div>
      <h1>Shop</h1>
      {specials.map((_product) => (
        <ProductsShop product={_product} key={_product.id} />
      ))}
    </div>
  );
};

export default Shop;
