import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../../reducer/cartReducer";

const CartContext = createContext();

const initialStateCart = {
  cart: [],
  cart_total: 0,
};

export function CartProvider({ children }) {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialStateCart);
  return (
    <CartContext.Provider value={{ ...cartState, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}

