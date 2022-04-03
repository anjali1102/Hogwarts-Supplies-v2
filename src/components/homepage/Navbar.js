import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar_container">
      <div className="navbar_main">
        <a href="/">
          <img
            src="/img/Hogwarts Supplies.png"
            className="brand-logo"
            alt="logo"
          />
        </a>
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
          <a href="/pages/login.html">
            <img src="/img/user.png" alt="user" />
          </a>
          <a href="/pages/cart.html">
            <img src="/img/cart.png" alt="cart" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
