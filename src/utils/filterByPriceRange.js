const filterByPriceRange = (products, priceSlider) => {
  return products.filter(({ price }) => price <= Number(priceSlider));
};

export {filterByPriceRange}