import { Link } from "react-router-dom";
import "./Navbar.css";
import { useWishlist, useCart, useAuth } from "../../context/index";
import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  const {
    user: { token },
    logout,
  } = useAuth();

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
            {token ? (
              <span className="count-notify">{wishlist.length}</span>
            ) : null}
          </Link>
          <Link to="/cart">
            <FaShoppingCart size={25} />
            {token ? <span className="count-notify">{cart.length}</span> : null}
          </Link>
          {token ? (
            <button
              className="btn btn-danger"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/signup">
              <FaUserCircle size={25} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
