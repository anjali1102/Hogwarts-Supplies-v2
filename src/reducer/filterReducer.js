import { defaultFilterState } from "./defaultFilterState";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortby: action.payload?.toUpperCase() };
    case "IN-STOCK":
      return { ...state, instockChecked: !state.instockChecked };
    case "FAST-DELIVERY":
      return { ...state, infastDeliveryChecked: !state.instockChecked };
    case "PRICE-SLIDER":
      // console.log("checkig price slider");
      return { ...state, priceSlider: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "CLEAR-FILTER":
      return defaultFilterState;
    default:
      return state;
  }
};

export { filterReducer };
