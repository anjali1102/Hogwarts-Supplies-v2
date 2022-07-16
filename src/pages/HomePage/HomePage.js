import React from "react";
import { Footer, HeroSection, FeatureProducts } from "../../components/index";
import "./HomePage.css";
import "../../components/FeatureProducts/FeatureProducts.css";

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
