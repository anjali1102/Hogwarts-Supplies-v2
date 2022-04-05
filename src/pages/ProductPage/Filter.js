import React from "react";
import "./ProductPage.css";

const Filter = ({ products }) => {
  console.log(products);
  return (
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
  );
};

export default Filter;
