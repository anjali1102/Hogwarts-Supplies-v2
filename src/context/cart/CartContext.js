import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../../reducer/cartReducer";

const CartContext = createContext();

const initialStateCart = {
  cart: [],
  cart_total: 0,
  actualPriceSum: 0,
  discount: 0,
};

export function CartProvider({ children }) {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialStateCart);

  const clearCart = () => {
    dispatchCart({ type: "CLEAR_CART", payload: [] });
  };
  return (
    <CartContext.Provider value={{ ...cartState, dispatchCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
