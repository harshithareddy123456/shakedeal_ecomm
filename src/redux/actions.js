export const add_to_cart = (obj) => {
  return {
    type: "add_to_cart",
    payload: obj,
  };
};

export const cartopen = () => {
  return {
    type: "cart_open",
  };
};

export const cartclose = () => {
  return {
    type: "cart_close",
  };
};
