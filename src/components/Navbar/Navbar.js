import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist/WishlistContext";
import { useCart } from "../../context/cart/CartContext";
import "./Navbar.css";
import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  // console.log("WishlistState ", wishlistState);
  console.log("cart ", cart);

  // console.log("wishlist", wishlist);
  return (
    <nav className="navbar_container">
      <div className="navbar_main">
        <Link to="/">
          <img
            src="/img/Hogwarts Supplies.png"
            className="brand-logo"
            alt="logo"
          />
        </Link>
        <div className="nav-items">
          <div className="search">
            <input type="text" className="search-box" placeholder="search" />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <Link to="/wishlist">
            <FaHeart size={25} />
            <span className="count-notify">{wishlist.length}</span>
          </Link>
          <Link to="/signup">
            <FaUserCircle size={25} />
          </Link>
          <Link to="/cart">
            <FaShoppingCart size={25} />
            <span className="count-notify">{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
