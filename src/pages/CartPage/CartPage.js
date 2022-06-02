import React from "react";
import "./CartPage.css";
import useWishlist from "../../context/wishlist/WishlistContext";
import { useCart } from "../../context/cart/CartContext";
import { cartReducer } from "../../reducer/cartReducer";

const CartPage = () => {
  const { cart, cart_total, dispatchCart } = useCart();
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
      <div className="wrap-container2">
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
              <div className="cartCard">
                <img src={img} className="card-image2" alt="card" />
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
                    <p className="items-quantity"> Qty :{quantity}</p>
                </div>
                <button
                  className="counter-btn"
                  onClick={() => decreaseCartItem(item, quantity)}
                >
                  <span className="minus-symb">-</span>
                </button>
                <button
                  className="counter-btn"
                  onClick={() => increaseCartItem(item)}
                >
                  <span className="add-symb">+</span>
                </button>
                <div className="remove-btn">
                  <button>
                    <i
                      className="fas fa-times"
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="summary-container">
        <div className="summary">
          <div className="summary-total-items">
            <span className="total-items"></span>
            <h2>Price Details</h2>
          </div>
          <div className="summary-subtotal">
            <div className="subtotal-title"></div>
            <div className="subtotal-value final-value"></div>
          </div>
          <div className="summary-total">
            <div className="total-title">
              <h3>COUPON</h3>
            </div>
            <div className="total-value final-value">NONE</div>
          </div>
          <hr />
          <div className="summary-total">
            <div className="total-title">
              <h3>Total</h3>
            </div>
            <div className="total-value final-value">₹{cart_total}</div>
          </div>
          <div className="summary-checkout">
            <button className="checkout-cta btn btn-success">
              Go to Secure Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartPage };
