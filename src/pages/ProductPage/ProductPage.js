import React from "react";
import { products } from "../../backend/db/products";
import { Footer } from "../../components/homepage/Footer";
import { Navbar } from "../../components/homepage/Navbar";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      {/* left section filter by categories */}
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
                <p>50</p>
                <p>150</p>
                <p>200</p>
              </div>
              <input
                type="range"
                min={150}
                max={200}
                defaultValue={0}
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
                  defaultValue
                  defaultChecked
                />
                <span className="check-desc">Tshirt</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  defaultValue
                  defaultChecked
                />
                <span className="check-desc">Toys</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  defaultValue
                  defaultChecked
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
                  defaultValue
                  defaultChecked
                />
                <span className="check-desc">4 Stars &amp; above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="rating"
                  className="radio-input"
                  defaultValue
                />
                <span className="check-desc">3 Stars &amp; above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="rating"
                  className="radio-input"
                  defaultValue
                />
                <span className="check-desc">2 Stars &amp; above</span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  name="rating"
                  className="radio-input"
                  defaultValue
                />
                <span className="check-desc">1 Stars &amp; above</span>
              </label>
            </div>
          </div>
          <div className="filter_sort">
            <h3>Sort By</h3>
            <div className="sort_gap">
              <label className="select-input">
                <input type="radio" name="sort" className="radio-input" />
                <span className="check-desc">Price - Low to High</span>
              </label>
              <label className="select-input">
                <input type="radio" name="sort" className="radio-input" />
                <span className="check-desc">Price - High to Low</span>
              </label>
            </div>
          </div>
        </div>

        {/* right section display cards */}

        {/* <h2>Featured Products</h2> */}
        <div className="featured__container bd-grid">
          {products.map((item) => {
            const { img, badge, title, discountPrice, price, offerPercent } =
              item;
            return (
              <div key={item._id} className="featured__product">
                <div className="card-vertical">
                  <img src={img} className="card-image" alt="card" />
                  <span className="card-badge">{badge}</span>
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
      <Footer />
    </>
  );
};

export { ProductPage };
