import helpHttp from "../helpers/helpHttp.js";

export const getProducts = async ({ commit }) => {
  const products = await helpHttp("product");

  commit("setProducts", products);
};

export const addToCart = ({ commit, state }, payload) => {
  const product = state.cart.find((item) => item.code === payload.code);

  if (product) {
    product.quantity = payload.quantity;
    return commit("setCart", product);
  }

  return commit("setCart", payload);
};

export const calculateGlobalSubtotal = ({ commit, state }) => {
  if (state.cart.length === 0) return commit("setGlobalSubtotal", 0);

  const subtotal = state.cart
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current);

  commit("setGlobalSubtotal", subtotal);
};

export const removeToCart = ({ commit, state }, payload) => {
  const products = state.cart.filter((item) => item.code !== payload.code);

  return commit("setRemoveCart", products);
};
