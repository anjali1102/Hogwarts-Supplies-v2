const filterByRating = (products, rating) => {
    console.log("filterByRating working")
  switch (rating) {
    case "1-AND-ABOVE":
      return products.filter(({ ratings }) => Number(ratings) >= 1);
    case "2-AND-ABOVE":
      return products.filter(({ ratings }) => Number(ratings) >= 2);
    case "3-AND-ABOVE":
      return products.filter(({ ratings }) => Number(ratings) >= 3);
    case "4-AND-ABOVE":
      return products.filter(({ ratings }) => Number(ratings) >= 4);
    default:
      return products;
  }
};

export { filterByRating };
