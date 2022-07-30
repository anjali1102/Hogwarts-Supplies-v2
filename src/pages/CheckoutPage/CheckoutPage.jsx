import React, { useState } from "react";
import { useCart } from "../../context";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [placeOrder, setPlaceOrder] = useState(false);
  const { cart } = useCart();
  return (
    <div className="counter-countainer">
      <div className="wrap-container2">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => {
              return (
                <div className="cartCard" key={item._id}>
                  <img src={item.img} className="card-image2" alt="card" />
                  <div className="card-info">
                    <div className="card-title">
                      <div>
                        <h3 className="card-title-header">{item.title}</h3>
                      </div>
                    </div>
                    <div className="price">
                      <p className="disc-price">{item.discountPrice}</p>
                      <p className="actual-price">{item.price}</p>
                      <p className="price-percentage">{item.offerPercent}</p>
                    </div>
                  </div>
                  <div className="counter-section">
                    <button
                      className="counter-btn"
                      onClick={() => decreaseCartItem(item, item.quantity)}
                    >
                      <span className="minus-symb">-</span>
                    </button>
                    <p className="items-quantity">{item.quantity}</p>
                    <button
                      className="counter-btn"
                      onClick={() => increaseCartItem(item)}
                    >
                      <span className="add-symb">+</span>
                    </button>
                    <button className="remove-btn-cart">
                      <i
                        className=" fa fa-times"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      ></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h2>
            Cart is feeling Light 😞,{" "}
            <Link to="/product" className="link-highlight">
              Add Some Products
            </Link>
          </h2>
        )}
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

export { CheckoutPage };
