export const AvailabilityInitialState = "none";

export const AvailabilityFilterReducer = (state, action) => {
  const availableProductsOnly = action.payload.productList.filter(
    (product) => product.quantityAvailable !== 0
  );

  const unAvailableProductsOnly = action.payload.productList.filter(
    (product) => product.quantityAvailable === 0
  );
  switch (action.type) {
    case "in-stock":
      return availableProductsOnly;
    case "out-of-stock":
      return unAvailableProductsOnly;
    case "all":
      return action.payload.productList;
    default:
      return [];
  }
};
