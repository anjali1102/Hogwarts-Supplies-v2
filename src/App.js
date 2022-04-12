import "./App.css";
import Mockman from "mockman-js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { WishlistPage } from "./pages/WishlistPage/WishlistPage";
import { CardPage } from "./pages/CartPage/CardPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { LogoutPage } from "./pages/LogoutPage/LogoutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<CardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/mockapi" element={<Mockman />} />
    </Routes>
  );
}

export default App;
