import { createContext, useContext, useReducer } from "react";
import {WishlistReducer} from "../../reducer/wishlistReducer";

const WishlistContext = createContext();

const initialState = {
  wishlist: [],
};

export function WishlistProvider({ children }) {
  const [wishlistState, dispatchWishlist] = useReducer(
    WishlistReducer,
    initialState
  );

  return (
    <WishlistContext.Provider value={{ ...wishlistState, dispatchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
