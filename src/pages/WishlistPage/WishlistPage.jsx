import { Link } from "react-router-dom";
import { useWishlist, useCart } from "../../context/index";
import "./WishlistPage.css";
import toast from "react-hot-toast";

const WishlistPage = () => {
  const notifyCart = () => toast.success("Added to Cart 👜 !! ");

  const { wishlist, dispatchWishlist } = useWishlist();
  const { cart, dispatchCart } = useCart();

  const removeFromWishlist = (productId) => {
    dispatchWishlist({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };

  const addToCart = (product) => {
    dispatchCart({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="wishlist-container">
      {wishlist.length === 0 ? (
        <div className="empty-wishlist-main">
          <div className="empty-wishlist-head">
            <div className="wishlist-empty-container">
              <img
                src="img/wishlist-empty.jpg"
                alt="empty-wishlist"
                width="400"
                className="wishlist-empty"
              />
              <h3 className="wishlist-empty-text">
                Nothing Here{" "}
                <div>
                  <Link to="/product" className="link-highlight">
                    Explore Products
                  </Link>
                </div>
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="wishlist-inner">
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
              button,
            } = item;
            return (
              <div key={_id} className="featured__product">
                <div className="card-vertical">
                  <img src={img} className="card-image" alt="card" />
                  <span className="card-badge">{badge}</span>
                  <button className="remove-btn">
                    <i
                      className="fas fa-times"
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
                        addToCart(item);
                        notifyCart();
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
      )}
    </div>
  );
};

export { WishlistPage };
