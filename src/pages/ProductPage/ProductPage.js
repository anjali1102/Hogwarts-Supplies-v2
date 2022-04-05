import React from "react";
import { products } from "../../backend/db/products";
import Filter from "./Filter";
import "./ProductPage.css";

const ProductPage = () => {
  const generativeData = () => {
    return [...new Set(products.map((item) => item))];
  };
  return (
    <>
      <main className="main-product">
        <Filter products={generativeData()} />

        {/* Cards */}
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
    </>
  );
};

export { ProductPage };
