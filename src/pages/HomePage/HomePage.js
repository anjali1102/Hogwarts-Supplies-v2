import React from "react";
import { products } from "../../backend/db/products";
import { Footer, HeroSection } from "../../components";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import "./HomePage.css";
import "../../components/FeatureProducts/FeatureProducts.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureProducts />
      <Footer />
    </div>
  );
};

export { HomePage };
