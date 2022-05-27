import React from "react";

import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../../reducer/cartReducer";
import { useAuth } from "../auth/AuthContext";
const CartContext = createContext();

const initialStateCart = {
  cart: [],
};

export function CartProvider({ children }) {
  const [cartState, dispatchCart] = useReducer(cartReducer, {cart: []});


  // Getting initial cart items.
	useEffect(() => {
		if (authToken) {
			try {
				(async () => {
					const res = await axios.get("api/user/cart", {
						headers: {
							authorization: authToken,
						},
					});
					const {
						data: { cart },
						status,
					} = res;
					if (status === 200) {
						dispatch({
							type: GET_CART_ITEMS,
							payload: cart,
						});
					}
				})();
			} catch (error) {
				toast.error("Some error occured in geetting cart items.");
			}
		}
	}, [authToken, GET_CART_ITEMS]);























  return (
    <CartContext.Provider value={{ ...cartState, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
