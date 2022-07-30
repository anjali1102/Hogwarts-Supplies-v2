import React, { useState } from "react";
import "./CartPage.css";
import { useCart } from "../../context/index";
import { Link } from "react-router-dom";
import { useRazorpay } from "../../hooks/useRazorpay";

const CartPage = () => {
  const [placeOrder, setPlaceOrder] = useState(false);
  const { cart, cart_total, dispatchCart } = useCart();
  const isCartFilled = cart.length > 0;
  const { displayRazorPay } = useRazorpay();

  const makePayment = async () => {
    await displayRazorPay({ total: cart_total });
  };

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

  const actualPriceSum = cart.reduce(
    (prev, everyCartItem) => prev + Number(everyCartItem.price),
    0
  );
  const discount = actualPriceSum - cart_total;

  return (
    <div className="counter-countainer">
      <div className="wrap-container2">
        {isCartFilled ? (
          <>
            {placeOrder ? (
              <div className="card-container">
                <div className="card hori-card card-shadow ">
                  <div className="card-img-hori">
                    <img
                      className="responsive-img img-hori"
                      src="img/address.jpg"
                      alt="house-img"
                    />
                  </div>
                  <div className="card-body flex-column mt-4">
                    <a className="card-title ">Deliver to :</a>
                    <p className=" fs-2 pb-1 pl-2">
                      4 Privet Drive, Little Whinging
                    </p>
                    <p className="pl-2 ">
                      Dursleys, Surrey, London in the southeast of England
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              cart.map((item) => {
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
              })
            )}
          </>
        ) : (
          <div className="cart-empty-container">
            <img
              src="img/cart-empty.png"
              alt="empty-cart"
              width="200"
              className="cart-empty"
            />
            <h1>
              Cart is feeling Light{" "}
              <div>
                <Link to="/product" className="link-highlight">
                  Explore Products
                </Link>
              </div>
            </h1>
          </div>
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
              <h3>Price Summary: </h3>
            </div>
            <div className="total-value final-value">
              <span className="Psummary-txt">Actual Price👉🏿</span>
              <span className="Psummary-price">₹{actualPriceSum}</span>{" "}
            </div>
            <div className="total-value final-value">
              <span className="Psummary-txt">Discount Applied👉🏿</span>
              <span className="Psummary-price">₹{discount}</span>
            </div>
            <div className="total-value final-value">
              <span className="Psummary-txt">Total Price 👉🏿</span>
              <span className="Psummary-price"> ₹{cart_total}</span>
            </div>
          </div>
          <hr />
          <div className="summary-total">
            <div className="total-title">
              <h3>Added Items : {cart.length}</h3>
            </div>
            <div className="total-value final-value">₹{cart_total}</div>
          </div>
          <div className="summary-checkout">
            <button
              className="checkout-cta btn btn-success"
              onClick={() => {
                if (placeOrder && cart.length !== 0) {
                  makePayment();
                } else if (!placeOrder && cart.length !== 0) {
                  setPlaceOrder(true);
                }
              }}
            >
              {placeOrder ? "Place Order" : "Pay Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartPage };
