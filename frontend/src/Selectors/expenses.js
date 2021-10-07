const getVisibleProducts = (products, { brand, availability }) => {
  return products.filter((product) => {
    const brandFilter = product.brand.toLowerCase() === brand;
    const availabileProducts =
      availability === "in-stock" && product.quantityAvailable !== 0;
    // const unAvailableProducts =
    //   availability === "out-of-stock" && product.quantityAvailable === 0;
    // console.log(unAvailableProducts);

    return brandFilter && availabileProducts;
  });
};

export default getVisibleProducts;
