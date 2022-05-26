export const setProducts = (state, payload) => (state.products = payload);

export const setCart = (state, payload) => {
  const newCart = state.cart.filter((item) => item.code !== payload.code);

  state.cart = [...newCart, payload];
};

export const setRemoveCart = (state, payload) => {
  state.cart = [...payload];
};

export const setSearchTerm = (state, payload) => (state.searchTerm = payload);

export const setGlobalSubtotal = (state, payload) => {
  state.globalSubtotal = payload;
};
