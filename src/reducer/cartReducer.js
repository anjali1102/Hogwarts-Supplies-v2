const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = action.payload;
      const cart = state.cart;
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        cart_total: state.cart_total + Number(product.discountPrice),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
        cart_total:
          state.cart_total -
          Number(action.payload.discountPrice) * action.payload.quantity,
      };

    case "INCREASE_CART_COUNTER":
      const id = action.payload._id;
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (id === item._id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),

        cart_total: state.cart_total + Number(action.payload.discountPrice),
      };

    case "DECREASE_CART_COUNTER":
      const id2 = action.payload._id;
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (id2 === item._id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
        cart_total: state.cart_total - Number(action.payload.discountPrice),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export { cartReducer };
