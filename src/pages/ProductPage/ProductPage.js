import React, { useReducer } from "react";
import "./ProductPage.css";
import { defaultFilterState } from "../../reducer/defaultFilterState";
import { filterReducer } from "../../reducer/filterReducer";
import { getMinMaxPrice } from "../../utils/minMaxPrice";
import { filterbySort } from "../../utils/filterbySort";
import { filterByPriceRange } from "../../utils/filterByPriceRange";
import { filterByRating } from "../../utils/filterByRating";
import { filterByCategory } from "../../utils/filterByCategory";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist/WishlistContext";
import { useCart } from "../../context/cart/CartContext";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Added to Card!");

const ProductPage = () => {
  const [state, dispatch] = useReducer(filterReducer, defaultFilterState);
  const { wishlist, dispatchWishlist } = useWishlist();
  const { cart, dispatchCart } = useCart();
  const [products, setProducts] = useState([]);
  // console.log({ wishlist });
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data.products);
    })();
  }, []);

  const { minPrice, maxPrice } = getMinMaxPrice(products);

  const { priceSlider, category, rating, sortby } = state;

  const filteredBySort = filterbySort(products, sortby);

  const filteredByPriceRange = filterByPriceRange(filteredBySort, priceSlider);

  const filteredByRating = filterByRating(filteredByPriceRange, rating);

  const filteredProducts = filterByCategory(filteredByRating, category);

  // add to wishlist
  const addToWishlist = (product) => {
    dispatchWishlist({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromWishlist = (productId) => {
    dispatchWishlist({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((product) => product._id === productId);
  };

  // Add to Cart
  const addToCart = (product) => {
    console.log("product: ", product);
    dispatchCart({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatchWishlist({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return (
    <>
      <main className="main-product">
        <div className="filter-wrapper">
          <div className="filter-header">
            <h4>Filters</h4>
            <button
              onClick={(e) => {
                dispatch({ type: "CLEAR-FILTER", payload: e.target.value });
              }}
            >
              Clear
            </button>
          </div>
          <div className="priceSlider">
            <h3>Price</h3>
            <div className="range-gap">
              <div className="range-price">
                <p>{minPrice}</p>
                <p>{~~(maxPrice + minPrice) / 2}</p>
                <p>{maxPrice}</p>
              </div>
              <input
                type="range"
                onInput={(e) => {
                  dispatch({ type: "PRICE-SLIDER", payload: e.target.value });
                }}
                min={minPrice}
                max={maxPrice}
                value={priceSlider}
                className="slider"
              />
            </div>
          </div>
          <div className="filter_category">
            <h3>Category</h3>
            <div className="filter-gap">
              <label className="select-input">
                <input
                  type="checkbox"
                  name="category"
                  value="category"
                  className="checkbox-input"
                  onChange={(e) => {
                    dispatch({ type: "CATEGORY", payload: "Tshirt" });
                  }}
                  checked={category.includes("Tshirt")}
                />
                <span className="check-desc">Tshirt</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="category"
                  value="category"
                  className="checkbox-input"
                  onChange={(e) => {
                    dispatch({ type: "CATEGORY", payload: "Toys" });
                  }}
                  checked={category.includes("Toys")}
                />
                <span className="check-desc">Toys</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="category"
                  value="category"
                  className="checkbox-input"
                  onChange={(e) => {
                    dispatch({ type: "CATEGORY", payload: "Acessories" });
                  }}
                  checked={category.includes("Acessories")}
                />
                <span className="check-desc">Acessories</span>
              </label>
            </div>
          </div>
          <div className="filter_rating">
            <h3>Filter</h3>
            <div className="rating-gap">
              <label className="select-input">
                <input
                  type="radio"
                  name="rating"
                  className="radio-input"
                  onChange={(e) => {
                    dispatch({ type: "RATING", payload: "4-AND-ABOVE" });
                  }}
                  checked={rating === "4-AND-ABOVE"}
                />
                <span className="check-desc">4 Stars &amp; above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="rating"
                  className="radio-input"
                  onChange={(e) => {
                    dispatch({ type: "RATING", payload: "3-AND-ABOVE" });
                  }}
                  checked={rating === "3-AND-ABOVE"}
                />
                <span className="check-desc">3 Stars &amp; above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="rating"
                  className="radio-input"
                  onChange={(e) => {
                    dispatch({ type: "RATING", payload: "2-AND-ABOVE" });
                  }}
                  checked={rating === "2-AND-ABOVE"}
                />
                <span className="check-desc">2 Stars &amp; above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="rating"
                  className="radio-input"
                  onChange={(e) => {
                    dispatch({ type: "RATING", payload: "1-AND-ABOVE" });
                  }}
                  checked={rating === "1-AND-ABOVE"}
                />
                <span className="check-desc">1 Stars &amp; above</span>
              </label>
            </div>
          </div>
          <div className="filter_sort">
            <h3>Sort By</h3>
            <div className="sort_gap">
              <label className="select-input">
                <input
                  type="radio"
                  name="sort-price"
                  className="radio-input"
                  onChange={(e) => {
                    dispatch({ type: "SORT", payload: "LOW-TO-HIGH" });
                  }}
                />
                <span className="check-desc">Price - Low to High</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="sort-price"
                  className="radio-input"
                  onChange={(e) => {
                    dispatch({ type: "SORT", payload: "HIGH-TO-LOW" });
                  }}
                  checked={sortby === "HIGH-TO-LOW"}
                />
                <span className="check-desc">Price - High to Low</span>
              </label>
            </div>
          </div>
        </div>

        {/* right section display cards */}
        <div className="featured__container bd-grid">
          {filteredProducts.map((item) => {
            const {
              img,
              badge,
              title,
              discountPrice,
              price,
              offerPercent,
              category,
              rating,
              _id,
            } = item;
            const isAddedToWishlist = isInWishlist(_id);

            return (
              <div key={_id} className="featured__product">
                <div className="card-vertical">
                  <img src={img} className="card-image" alt="card" />
                  <span className="card-badge">{badge}</span>
                  <i
                    className="fas fa-heart"
                    style={{
                      color: isAddedToWishlist ? "tomato" : "silver",
                    }}
                    onClick={() => {
                      if (isAddedToWishlist) {
                        removeFromWishlist(_id);
                      } else {
                        addToWishlist(item);
                      }
                      
                    }}
                  ></i>
                  <div className="card-info">
                    <div className="card-title">
                      <div>
                        <h3 className="card-title-header">{title}</h3>
                      </div>
                    </div>
                    <div className="price">
                      <p className="disc-price">{discountPrice}</p>
                      <p className="actual-price">{price}</p>
                      <p class Name="price-percentage">
                        {offerPercent}
                      </p>
                    </div>
                  </div>
                  {console.log(
                    cart.some((cartItem) => item._id === cartItem._id)
                  )}
                  {cart.some((cartItem) => item._id === cartItem._id) ? (
                    <Link to="/cart">
                      <button className="btn btn-danger add-cart">
                        Go to cart
                      </button>
                    </Link>
                  ) : (
                    // <div onClick={notify}>
                    <button
                      className="btn btn-success add-cart"
                      onClick={() => {
                        addToCart(item);
                        notify();
                      }}
                    >
                      Add to Cart
                      <Toaster />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export { ProductPage };
