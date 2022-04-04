import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <img src="/img/heart.png" alt="heart" />
          </Link>
          <Link to="/login">
            <img src="/img/user.png" alt="user" />
          </Link>
          <Link to="/cart">
            <img src="/img/cart.png" alt="cart" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
