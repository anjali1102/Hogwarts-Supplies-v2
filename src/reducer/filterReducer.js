import { defaultFilterState } from "./defaultFilterState";

const filterReducer = (state, action) => {
  const SORT="SORT";
  switch (action.type) {
    case SORT:
      return { ...state, sortby: action.payload };
    case "PRICE-SLIDER":
      return { ...state, priceSlider: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "CATEGORY":
      let category = state.category;
      if (state.category.includes(action.payload)) {
        category = [...state.category.filter((cat) => cat !== action.payload)];
      } else {
        category = [...state.category, action.payload];
      }
      return { ...state, category };
    case "CLEAR-FILTER":
      return defaultFilterState;
    default:
      return state;
  }
};

export { filterReducer };
