// export const myGetter = (state) => { return state }

export const productsByTerm = ({ searchTerm, products }) => {
  if (searchTerm.length === 0) return products;

  const byName = products.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const byCategory = products.filter(({ category }) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return [...byName, ...byCategory];
};

export const productsByCategory =
  ({ products }) =>
  (categoryName) => {
    return products.filter(
      ({ category }) => category.name.toLowerCase() === categoryName
    );
  };
