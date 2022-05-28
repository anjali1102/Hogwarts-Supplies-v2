import React from "react";
import "./CartPage.css";
import useWishlist from "../../context/wishlist/WishlistContext";
import { useCart } from "../../context/cart/CartContext";

const CartPage = () => {
  const { cart, dispatchCart } = useCart();
  const removeFromCart = (productId) => {
    dispatchCart({ type: "REMOVE_FROM_CART", payload: productId });
  };
  const increaseCartItem = (productId) => {
    dispatchCart({ type: "INCREASE_CART_COUNTER", payload: productId });
  };

  const decreaseCartItem = (productId, quantity) => {
    if (quantity <= 1) {
      removeFromCart(productId);
    } else {
      dispatchCart({ type: "DECREASE_CART_COUNTER", payload: productId });
    }
  };
  return (
    <div className="counter-countainer">
      <div
        className="summary-container"
        style={{
          backgroundColor: "var(--white-color)",
          padding: "1rem",
          position: "fixed",
          width: "300px",
        }}
      >
        <div className="summary">
          <div className="summary-total-items">
            <span className="total-items"></span>
            <h2>Price Details</h2>
          </div>
          <div className="summary-subtotal">
            <div className="subtotal-title">
              <h3>Subtotal</h3>
            </div>
            <div className="subtotal-value final-value">$130.00</div>
          </div>
          <div className="summary-total">
            <div className="total-title">
              <h3>Discount</h3>
            </div>
            <div className="total-value final-value">$-6</div>
          </div>
          <hr />
          <div className="summary-total">
            <div className="total-title">
              <h3>Total</h3>
            </div>
            <div className="total-value final-value">$130.00</div>
          </div>
          <div className="summary-checkout">
            <button className="checkout-cta btn btn-success">
              Go to Secure Checkout
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          maxWidth: "1200px",
          backgroundColor: "pink",
        }}
      >
        {cart.map((item) => {
          const {
            img,
            badge,
            title,
            discountPrice,
            price,
            offerPercent,
            category,
            rating,
            quantity,
            _id,
          } = item;
          return (
            <div key={_id} className="featured__product">
              <div className="card-vertical">
                <img src={img} className="card-image" alt="card" />
                <span className="card-badge">{badge}</span>
                <button
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "white",
                    borderRadius: "50%",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  <i
                    className="fas fa-times"
                    style={{
                      color: "tomato",
                    }}
                    onClick={() => {
                      removeFromCart(_id);
                    }}
                  ></i>
                </button>
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
                <button
                  className="counter-btn"
                  onClick={() => increaseCartItem(_id)}
                >
                  <span className="add-symb">+</span>
                </button>
                <button
                  className="counter-btn"
                  onClick={() => decreaseCartItem(_id, quantity)}
                >
                  <span className="minus-symb">-</span>
                </button>
                <span>Quantity : {quantity}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CartPage };
