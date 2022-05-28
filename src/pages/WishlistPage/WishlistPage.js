import React from "react";
import { useWishlist } from "../../context/wishlist/WishlistContext";

const WishlistPage = () => {
  const { wishlist, dispatchWishlist } = useWishlist();
  const removeFromWishlist = (productId) => {
    dispatchWishlist({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          maxWidth: "1200px",
          height:"100vh",
          flexWrap:"wrap",
        }}
      >
        {wishlist.map((item) => {
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
                      removeFromWishlist(_id);
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
                    <p class Name="price-percentage">
                      {offerPercent}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { WishlistPage };
