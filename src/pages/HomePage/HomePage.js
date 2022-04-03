import React from "react";
import { Navbar } from "../../components/homepage/Navbar";
import { Footer } from "../../components/homepage/Footer";
import { products } from "../../backend/db/products";
import { HeroSection } from "../../components/homepage/HeroSection";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import "./HomePage.css";
import "../../components/FeatureProducts/FeatureProducts.css";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureProducts />
      <Footer />
    </div>
  );
};

export { HomePage };
