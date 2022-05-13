import React from "react";
import useWishlist from "../../context/wishlist/WishlistContext";
import { useCart } from "../../context/cart/CartContext";

const CartPage = () => {
  const { cart, dispatchCart } = useCart();
  const removeFromCart = (productId) => {
    dispatchCart({ type: "REMOVE_FROM_CART", payload: productId });
  };
  return (
    // <div style={{ height: "70vh" }}>
    //   <div
    //     className="summary-container"
    //     style={{
    //       backgroundColor: "var(--white-color)",
    //       padding: "1rem",
    //       position: "fixed",
    //       width: "300px",
    //     }}
    //   >
    //     <div className="summary">
    //       <div className="summary-total-items">
    //         <span className="total-items"></span>Price Details
    //       </div>
    //       <div className="summary-subtotal">
    //         <div className="subtotal-title">Subtotal</div>
    //         <div className="subtotal-value final-value">$130.00</div>
    //       </div>
    //       <div className="summary-total">
    //         <div className="total-title">Discount</div>
    //         <div className="total-value final-value">$-6</div>
    //       </div>
    //       <hr />
    //       <div className="summary-total">
    //         <div className="total-title">Total</div>
    //         <div className="total-value final-value">$130.00</div>
    //       </div>
    //       <div className="summary-checkout">
    //         <button className="checkout-cta">Go to Secure Checkout</button>
    //       </div>
    //     </div>
    //   </div>

    <div
      style={{
        display: "flex",
        gap: "1rem",
        maxWidth: "1200px",
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
            </div>
          </div>
        );
      })}
    </div>
    // </div>
  );
};

export { CartPage };
