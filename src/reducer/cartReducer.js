import React from "react";
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case "INCREASE_CART_COUNTER":
      const id = action.payload;
      console.log("inside cart increase");
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (id === item._id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      };
    case "DECREASE_CART_COUNTER":
      const id2 = action.payload;
      console.log("inside cart decrease");
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (id2 === item._id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export { cartReducer };
