export const initialFiltersState = {
  brand: null,
  color: null,
  price: null,
  availability: null,
};

export const filtersReducer = (state, action) => {
  switch (action.type) {
    case "brand":
      return {
        // ...state,
        brand: action.payload.filterType,
      };

    case "availability":
      return {
        availability: action.payload.filter,
      };

    default:
      return state;
  }
};
