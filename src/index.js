import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./components";
import { Footer } from "./components/Footer/Footer";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { WishlistProvider } from "./context/wishlist/WishlistContext";
import { CartProvider } from "./context/cart/CartContext";
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <Navbar />
          <App />
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
