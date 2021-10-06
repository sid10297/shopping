const BrandSortedProducts = ({ product }) => {
  return (
    <div>
      <h1>{product.brand}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default BrandSortedProducts;
