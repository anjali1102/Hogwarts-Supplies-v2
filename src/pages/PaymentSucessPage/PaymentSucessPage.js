import React from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import "./PaymentSucessPage.css";

const PaymentSucessPage = () => {
  return (
    <div className="paySucess-main">
      <div className="paySucess-content">
        <h1>Your Order has been Placed successfully 🎉</h1>
        <Confetti width={1500} height={680} />
        <Link className="btn btn-success" id="paySucess-btn" to="/product">
          Explore More Products
        </Link>
      </div>
    </div>
  );
};

export { PaymentSucessPage };
