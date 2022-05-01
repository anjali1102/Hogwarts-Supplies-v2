const filterbySort = (products, sortby) => {
  switch (sortby) {
    case "LOW-TO-HIGH":
      return products.sort((a, b) => a.price - b.price);

    case "HIGH-TO-LOW":
      return products.sort((a, b) => b.price - a.price);

    default:
      return products;
  }
};

export { filterbySort };
