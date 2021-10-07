export const brandFilterReducerDefaultState = "none";

export const brandFilterReducer = (state, action) => {
  // console.log(action.type, "typeee");
  const includesInBrand = action.payload.productList.filter(
    (product) => product.brand.toLowerCase() === action.type.toLowerCase()
  );
  // console.log(includesInBrand);

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

    case "all":
      return includesInDefault;
    default:
      return [];
  }
};
