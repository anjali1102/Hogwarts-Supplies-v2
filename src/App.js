import "./App.css";
import Mockman from "mockman-js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { WishlistPage } from "./pages/WishlistPage/WishlistPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { Navbar } from "./components";
import { useAuth } from "./context/auth/AuthContext";
import { RequireAuth } from "./hooks/RequireAuth";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "./ScrollToTop";

function App() {
  const { user } = useAuth();
  return (
    <div className="main-container2">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishlistPage />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mockapi" element={<Mockman />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
