import { products } from "../backend/db/products";
import { getMinMaxPrice } from "../utils/minMaxPrice";

const { maxPrice } = getMinMaxPrice(products);

const defaultFilterState = {
  instockChecked: false,
  infastDeliveryChecked: false,
  sortby: "HIGH-TO-LOW",
  priceSlider: maxPrice,
};

export { defaultFilterState };
