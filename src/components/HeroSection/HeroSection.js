import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main className="main-1">
      <section className="home" id="home">
        <div className="home__container">
          <div className="home__data">
            <h1 className="home__title">
              <p className="title-heading">NEW</p>
              <span>ARRIVALS</span>
            </h1>
            <Link to="/product" className="button">
              GO SHOPPING
            </Link>
          </div>
          <img src="img/harry.gif" alt="home image" className="home__img" />
        </div>
      </section>

      {/* Man and Women Categories */}
      <section className="collection section">
        <div className="collection__container bd-grid">
          <div className="collection__box">
            <img
              src="img/bg2.gif"
              alt="background"
              className="collection__img"
            />
            <div className="collection__data">
              <h2 className="collection__title">
                <span className="collection__subtitle">Men</span>
                <div>PRODUCTS</div>
              </h2>
              <Link to="/product" className="collection__view">
                View collection
              </Link>
            </div>
          </div>
          <div className="collection__box">
            <div className="collection__data">
              <h2 className="collection__title">
                <span className="collection__subtitle">Women</span>
                <div>PRODUCTS</div>
              </h2>
              <Link to="/product" className="collection__view">
                View collection
              </Link>
            </div>
            <img src="img/bg.gif" alt="women gif" className="collection__img" />
          </div>
        </div>
      </section>
    </main>
  );
};

export { HeroSection };
