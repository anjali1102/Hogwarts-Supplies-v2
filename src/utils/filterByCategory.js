const filterByCategory = (products, category) => {
  if (category.length == 0) {
    return products;
  } else {
    let reduce = products.reduce((acc, curr) => {
      if (category.includes(curr.category)) {
        return [...acc, curr];
      } else {
        return [...acc];
      }
    }, []);
    return reduce;
  }
};

export { filterByCategory };
