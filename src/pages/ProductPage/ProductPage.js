import React, { useReducer } from "react";
import { products } from "../../backend/db/products";
import "./ProductPage.css";
import { defaultFilterState } from "../../reducer/defaultFilterState";
import { filterReducer } from "../../reducer/filterReducer";
import { getMinMaxPrice } from "../../utils/minMaxPrice";
import { filterbySort } from "../../utils/filterbySort";
import { filterByPriceRange } from "../../utils/filterByPriceRange";
import { filterByRating } from "../../utils/filterByRating";

const { minPrice, maxPrice } = getMinMaxPrice(products);

const ProductPage = () => {
  const [state, dispatch] = useReducer(filterReducer, defaultFilterState);

  const { sortby, ratings, priceSlider } = state;

  // const filteredProducts = filterbySort(products, sortby);

  const filteredBySort = filterbySort(products, sortby);
  const filteredByPriceRange = filterByPriceRange(filteredBySort, priceSlider);
  const filteredProducts = filterByRating(filterByPriceRange, ratings);

  return (
    <>
      <main className="main-product">
        <div className="filter-wrapper">
          <div className="filter-header">
            <h4>Filters</h4>
            <p>Clear</p>
          </div>
          <div className="priceSlider">
            <h3>Price</h3>
            <div className="range-gap">
              <div className="range-price">
                <p>{minPrice}</p>
                <p>150</p>
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
                  name="light"
                  className="checkbox-input"
                />
                <span className="check-desc">Tshirt</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                />
                <span className="check-desc">Toys</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
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
                    dispatch({ type: "RATING", payload: "4-AND-ABOVE" }); //
                  }}
                  checked={ratings === "4-AND-ABOVE"}
                />
                <span className="check-desc">4 Stars &amp; above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="rating"
                  className="radio-input"
                  onChange={(e) => {
                    dispatch({ type: "RATING", payload: "3-AND-ABOVE" }); //
                  }}
                  checked={ratings === "3-AND-ABOVE"}
                />
                <span className="check-desc">3 Stars &amp; above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="rating"
                  className="radio-input"
                  onChange={(e) => {
                    dispatch({ type: "RATING", payload: "2-AND-ABOVE" }); //
                  }}
                  checked={ratings === "2-AND-ABOVE"}
                />
                <span className="check-desc">2 Stars &amp; above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="rating"
                  className="radio-input"
                  onChange={(e) => {
                    dispatch({ type: "RATING", payload: "1-AND-ABOVE" }); //
                  }}
                  checked={ratings === "1-AND-ABOVE"}
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
                  checked={sortby === "LOW-TO-HIGH"}
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
            console.log("inside filteredProduct.map")
            const { img, badge, title, discountPrice, price, offerPercent } =
              item;
            return (
              <div key={item._id} className="featured__product">
                <div className="card-vertical">
                  <img src={img} className="card-image" alt="card" />
                  <span className="card-badge">{badge}</span>
                  <i className="fas fa-heart "></i>
                  <div className="card-info">
                    <div className="card-title">
                      <div>
                        <h3 className="card-title-header">{title}</h3>
                      </div>
                    </div>
                    <div className="price">
                      <p className="disc-price">{discountPrice}</p>
                      <p className="actual-price">{price}</p>
                      <p className="price-percentage">{offerPercent}</p>
                    </div>
                  </div>
                  <button className="btn btn-success add-cart">
                    Add to Cart
                  </button>
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
