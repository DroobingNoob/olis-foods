import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel";
import WelcomeSection from "../Components/WelcomeSecton/WelcomeSection";
import ProductsSection from "../Components/ProductsSection/ProductsSection";
import Footer from "../Components/Footer/Footer";
import TestimonialSection from "../Components/TestimonialSection/TestimonialSection";
import StatsSection from "../Components/StatsSection/StatsSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <WelcomeSection />
      <StatsSection />
      <TestimonialSection />
      <ProductsSection />
      <Footer />
    </>
  );
};

export default HomePage;
