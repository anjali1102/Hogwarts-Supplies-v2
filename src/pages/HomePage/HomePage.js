import React from "react";
import { products } from "../../backend/db/products";
import { HeroSection } from "../../components/homepage/HeroSection";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import "./HomePage.css";
import "../../components/FeatureProducts/FeatureProducts.css";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureProducts />
    </div>
  );
};

export { HomePage };
