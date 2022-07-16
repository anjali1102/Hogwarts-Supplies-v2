import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../../backend/db/products";
import "./FeatureProducts.css";
import { useCart, useAuth } from "../../context/index";

import toast from "react-hot-toast";

const FeatureProducts = () => {
  const notifyCart = () => toast.success("Added to Card!");
  const { cart, dispatchCart } = useCart();
  const addToCart = (product) => {
    dispatchCart({ type: "ADD_TO_CART", payload: product });
  };
  const {
    user: { token },
  } = useAuth();

  const navigate = useNavigate();

  return (
    <section className="featured section" id="featured">
      <h2 className="section-title">FEATURED PRODUCTS</h2>
      <Link to="/product" className="section-all">
        <span className="goto-products">VIEW ALL</span>
      </Link>

      <div className="featured__container bd-grid">
        {products.slice(0, 3).map((item) => {
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
                {cart?.some((cartItem) => item._id === cartItem._id) ? (
                  <Link to="/cart">
                    <button className="btn btn-danger add-cart">
                      Go to cart
                    </button>
                  </Link>
                ) : (
                  <button
                    className="btn btn-success add-cart"
                    onClick={() => {
                      if (!token) {
                        navigate("/login");
                      } else {
                        addToCart(item);
                        notifyCart();
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { FeatureProducts };
