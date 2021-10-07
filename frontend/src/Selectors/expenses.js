const getVisibleProducts = (products, { brand, availability }) => {
  return products.filter((product) => {
    const brandFilter = product.brand.toLowerCase() === brand;
    const availabileProducts =
      availability === "in-stock" && product.quantityAvailable !== 0;
    const unavailableProducts =
      availability === "out-of-stock" && product.quantityAvailable === 0;

    return brandFilter && availabileProducts && unavailableProducts;
  });
};

export default getVisibleProducts;
