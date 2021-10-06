export const brandFilterReducerDefaultState = "all";

export const brandFilterReducer = (state, action) => {
  const includesInBrand = action.payload.productList.filter(
    (product) => product.brand.toLowerCase() === action.type.toLowerCase()
  );

  const includesInDefault = action.payload.productList.map(
    (product) => product
  );

  switch (action.type) {
    case "adidas":
      return includesInBrand;

    case "nike":
      return includesInBrand;

    case "lotto":
      return includesInBrand;

    default:
      return includesInDefault;
  }
};
