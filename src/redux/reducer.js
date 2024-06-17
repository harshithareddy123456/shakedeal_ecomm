const intial_state = {
  noofitems_cart: 0,
  cartitems: [],
  iscartopen: false,
};

const Reducer = (state = intial_state, action) => {
  switch (action.type) {
    case "add_to_cart":
      const updatedCartItems = [...state.cartitems, action.payload];
      return {
        ...state,
        cartitems: updatedCartItems,
        noofitems_cart: updatedCartItems.length,
      };
      break;
    case "cart_open":
      return { ...state, iscartopen: true };
    case "cart_close":
      return { ...state, iscartopen: false };
    default:
      return state;
      break;
  }
};

export default Reducer;
